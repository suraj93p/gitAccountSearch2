require.config({
    waitSeconds: 0,
    paths: {
        'app': 'app/app',
        'appController': 'controllers/app-controller',
        'getAllUsersService': 'services/get-all-users-service',
        'getUserDetailsService': 'services/get-user-details-service',
        'searchUsersService':'services/search-users-service',
        'constants': 'config/constants',
        'jquery': 'https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min',
        'angular': 'https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min',
        'bootstrap': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min',
        'bootstrapCSS': 'https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min',
        'fontAwesome': 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min',
        'style': '../css/style'
    },
    map: {
        '*': {
            'css': 'https://cdnjs.cloudflare.com/ajax/libs/require-css/0.1.10/css.min.js'
        }
    },
    shim: {
        angular: {
            exports: 'angular'
        },
        bootstrap: ['jquery'],
        appController: ['constants']
    }
});

require(['app', 'jquery', 'bootstrap', 'appController', 'css!bootstrapCSS', 'css!fontAwesome', 'css!style'], function (app) {
    app.init();
});