'use strict';

var app = angular.module('foodCompass');

app.service('Foursquare', function($http) {
  var apiUrl = 'https://api.foursquare.com/v2/venues/search',
    categoryId = '4bf58dd8d48988d1c4941735', //restaurants
    apiClientId = 'PD0OL2ABJBIP2MRTL4QFZM3BAZ5YP5SHZIKVT54UAST0KG54',
    apiClientSecret = 'VDEWJDKZML5ZD0PDPXTR1F5USUU5DSEKR115ZSIBRVCBTUZT',
    apiVersion = '20130705';

  this.nearbyFood = function(data) {
    var requestUrl = apiUrl + '?ll=' + data.latitude + ',' + data.longitude +
      '&radius=800&intent=checkin&categoryId=' + categoryId +
      '&client_id=' + apiClientId + '&client_secret=' + apiClientSecret +
      '&v=' + apiVersion;
    return $http.get(requestUrl).then(function(response) {
      return response.data.response;
    });
  };
});
