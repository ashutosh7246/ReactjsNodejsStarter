import Environment from '../../common/environments.js';
import {Delegator} from '../../common/delegatorService.js';

export class RegisterService {
    registerUser = (params, successCallBack, errorCallBack) => {
        var delegator = new Delegator;
        const url = Environment.SERVER + Environment.RESTURL.myprofile + Environment.RESTURL.register;
        delegator._post(params, url, successCallBack, errorCallBack);
    }
}