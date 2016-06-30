'use strict';
/* App Module */
var photoAlbumApp = angular.module('photoAlbumApp'
    , ['ngRoute', 'cloudinary', 'photoAlbumAnimations', 'photoAlbumControllers', 'photoAlbumServices']);

photoAlbumApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/home', {
        templateUrl: 'partials/main.html'
        , resolve: {
            photoList: function ($q, $rootScope, album) {
                if (!$rootScope.serviceCalled) {
                    return album.photos({}, function (v) {
                        $rootScope.serviceCalled = true;
                        $rootScope.photos = v.resources;
                    });
                } else {
                    return $q.when(true);
                }
            }
        }
        , controller: 'photoUploadCtrlJQuery'
    }).otherwise({
        redirectTo: '/home'
    });;
  }]);