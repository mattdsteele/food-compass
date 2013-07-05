'use strict';

var app = angular.module('foodCompass');

app.service('Foursquare', function($http) {
  this.nearbyFood = {};
});
