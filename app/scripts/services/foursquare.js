'use strict';

var app = angular.module('foodCompass');

app.service('Foursquare', function($http) {
  var apiUrl = 'https://api.foursquare.com/v2/venues/search',
  categoryId = '4bf58dd8d48988d1c4941735'; //restaurants

  this.nearbyFood = function(data) {
    var requestUrl = apiUrl + '?ll=' + data.latitude + ',' + data.longitude +
      '&radius=800&intent=checkin&categoryId=' + categoryId;
    return $http.get(requestUrl).then(function(response) {
      return response.data.response;
    });
  };
});
