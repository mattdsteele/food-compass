'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('foodCompass'));

  var MainCtrl,
    scope,
    Foursquare;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _Foursquare_, $q) {
    scope = $rootScope.$new();
    Foursquare = _Foursquare_;
    spyOn(Foursquare, 'nearbyFood').andCallFake(function() {
      var deferred = $q.defer();
      deferred.resolve({venues: [{}, {}]});
      return deferred.promise;
    });
    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      Foursquare: Foursquare
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    scope.$apply();
    expect(scope.venues.length).toBe(2);
  });
});
