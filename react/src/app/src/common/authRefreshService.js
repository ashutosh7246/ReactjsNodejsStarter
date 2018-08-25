import {Delegator} from './delegatorService.js';
import {LocalStorageService} from "./localStorageService.js";

export class AuthRefreshService {
    localStorageService = new LocalStorageService
    delegator = new Delegator;
    lockedForRefresh = false;
    operation;

    refresh = () => {
          const refreshToken = this.localStorageService.getValue('refreshToken');
          let data = {
              refreshToken: refreshToken,
              grantType: 'accessToken'
          };
          this.loginService.refreshAccessToken(data, this.refreshTokenSuccess, this.refreshTokenError);
    }

    refreshTokenSuccess = (result) => {
      this.localStorageService.setValue('accessToken', result.accessToken);
      this.localStorageService.setValue('refreshToken', result.refreshToken);
        this.lockedForRefresh = false;
        this.delegator.unLockRequest();
        let userData = localStorage.getItem('user');
        if (userData) {
          userData = JSON.parse(userData);
          userData['isAccessTokenExpired'] = window.btoa('0');
          localStorage.setItem('user', JSON.stringify(userData));
        } else {
          this.localStorageService.setValue('isAccessTokenExpired', 0);
        }
      }
    
      refreshTokenError = (error) => {
        this.delegator.unLockRequestFlag();
        this.lockedForRefresh = false;
        this.localStorageService.clearLocalStorage();
        this.props.history.push("/login");
      }

      interceptSessionExpired = () => {
        if (!this.lockedForRefresh) {
          this.lockedForRefresh = true;    
          // queue the requests
          this.delegator.lockRequest();
          this.refresh();
        }
      }
}