define(['app'], function (app) {
    app.service('getUserDetailsService', ['$http', '$q', function ($http, $q) {
        this.getUserDetails = function (userLogin) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: constants.URLs.getUser + userLogin
            }).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        };
    }]);
});