define(['app'], function (app) {
    app.service('getAllUsersService', ['$http', '$q', function ($http, $q) {
        this.getAllUsers = function () {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: constants.URLs.allUsers
            }).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        };
    }]);
});