'use strict';

angular.module('foodCompass')
  .controller('MainCtrl', function ($scope, Foursquare) {
    $scope.venues = [];

    Foursquare.nearbyFood({latitude: 41.258603, longitude: -95.934172}).then(function(results) {
      $scope.venues = results.venues;
    });
  });
