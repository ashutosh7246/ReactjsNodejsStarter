module.exports = {
    SERVER: 'http://localhost:4000/',
    apiUrl: 'api/v1/',
    RESTURL: {
        myprofile: 'myprofile/',
        otp: 'otp/',
        verifyOtp: 'verifyOtp',
        resendOtp: 'resendOtp',
        authenticate: 'authenticate',
        logout: 'logout',
        registerClientId: 'add/clientId',
        authenticationUrl: 'oauth/token',
        loginUrl: 'login',
        deleteClientId: 'logout/web'
    },
    secrets: {
        raffelSecret: ':secret'
    }
};