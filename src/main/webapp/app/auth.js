angular
        .module('services.auth',
//DONE Ch4L1Ex3: modify dependency to services.auth.openam-min
//DONE Ch4L2Ex1: modify dependency to services.auth.openam
//DONE Ch5L1Ex3: modify dependency to services.auth.oauth2
//DONE Ch6L1Ex2: modify dependency to services.uma
                ['services.uma']); //selects the implementation of loginService


