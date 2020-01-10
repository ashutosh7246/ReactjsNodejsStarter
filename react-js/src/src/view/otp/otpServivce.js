import Environment from '../../common/environments.js';
import {Delegator} from '../../common/delegatorService.js';

export class OTPService {
    verifyOTP(user, successCallback, errorCallback) {
        var delegator = new Delegator;
        const url = Environment.SERVER + Environment.RESTURL.otp + Environment.RESTURL.verifyOtp;
        delegator._post(user, url, successCallback, errorCallback);
    }

    resendOtp(data, successCallback, errorCallback) {
        var delegator = new Delegator;
      const url = Environment.SERVER + Environment.RESTURL.otp + Environment.RESTURL.resendOtp;
      delegator._post(data, url, successCallback, errorCallback);
    }
}