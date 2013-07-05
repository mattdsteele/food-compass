'use strict';

var app = angular.module('foodCompass');

app.service('Foursquare', function($http) {
  var apiUrl = 'https://api.foursquare.com/v2/venues/explore';
  this.nearbyFood = function(data) {
    var requestUrl = apiUrl + '?ll=' + data.latitude + ',' + data.longitude + '&section=food';
    return $http.get(requestUrl).then(function(response) {
      return response.data.response;
    });
  };
});
