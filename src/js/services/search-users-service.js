define(['app'], function (app) {
    app.service('searchUsersService', ['$http', '$q', function ($http, $q) {
        this.searchUser = function (searchTerm) {
            var defer = $q.defer();
            $http({
                method: 'GET',
                url: constants.URLs.searchUsers + searchTerm
            }).then(function (response) {
                defer.resolve(response);
            });

            return defer.promise;
        };
    }]);
});