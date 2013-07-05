'use strict';

describe('foursquare service', function() {
  var foursquare, http;
  beforeEach(module('foodCompass'));

  beforeEach(inject(function($httpBackend, _Foursquare_) {
    http = $httpBackend;
    foursquare = _Foursquare_;
  }));

  it('knows how to talk to the foursquare API', function() {
    expect(foursquare.nearbyFood).toBeDefined();
  });
});
