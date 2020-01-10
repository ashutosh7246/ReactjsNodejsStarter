import Environment from '../../common/environments.js';
import {Delegator} from '../../common/delegatorService.js';

export class ChangePasswordService {
    changePassword = (data, successCallBack, errorCallBack) => {
        var delegator = new Delegator;
        const url = Environment.SERVER + Environment.RESTURL.myprofile + Environment.RESTURL.changePassword;
        delegator._put(data, url, successCallBack, errorCallBack);
    }
}