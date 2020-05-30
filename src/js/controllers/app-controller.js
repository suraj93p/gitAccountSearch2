define(['app', 'getAllUsersService', 'getUserDetailsService', 'searchUsersService'], function (app) {
    app.controller('userDetailsAppController', ['$scope', '$http', 'getAllUsersService', 'getUserDetailsService', 'searchUsersService', function ($scope, $http, getAllUsersService, getUserDetailsService, searchUsersService) {
        $scope.getAllUsers = function () {
            getAllUsersService.getAllUsers().then(function (response) {
                $scope.users = response.data;
            });
        };
        $scope.getDetails = function (user) {
            getUserDetailsService.getUserDetails(user.login).then(function (response) {
                $scope.selectedUser = response.data;
            });
        };
        $scope.openGitLink = function (user) {
            var win = window.open(user.html_url, '_blank');
        };
        $scope.searchUser = function () {
            var searchVal = $scope.searchTerm;
            if (typeof searchVal === 'undefined' || searchVal === '') {
                this.getAllUsers();
            } else {
                searchUsersService.searchUser(searchVal).then(function (response) {
                    $scope.users = response.data.items;
                });
            }
        };
        $scope.getAllUsers();
    }]);
});