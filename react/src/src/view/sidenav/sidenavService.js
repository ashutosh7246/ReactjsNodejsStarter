import Environment from '../../common/environments.js';
import {Delegator} from '../../common/delegatorService.js';

export class SideNavService {
    deleteClientId (modal, successCallback, errorCallback) {
        var delegator = new Delegator;
        const url = Environment.SERVER + Environment.apiUrl + Environment.RESTURL.deleteClientId;
        delegator._post(modal, url, successCallback, errorCallback);
    }

    logoutUser(user, successCallback, errorCallback) {
        var delegator = new Delegator;
      const url = Environment.SERVER + Environment.RESTURL.myprofile + Environment.RESTURL.logout;
      delegator._post(user, url, successCallback, errorCallback);
    }
}