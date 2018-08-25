import Environment from '../../common/environments.js';
import {Delegator} from '../../common/delegatorService.js';

export class ForgotPasswordService {
    forgotPassword(user, successCallback, errorCallback) {
        var delegator = new Delegator;
        const url = Environment.SERVER + Environment.RESTURL.myprofile + Environment.RESTURL.forgotUserPassword;
        delegator._post(user, url, successCallback, errorCallback);
    }
}