'use strict';

describe('foursquare service', function() {
  var foursquare, http;
  beforeEach(module('foodCompass'));

  beforeEach(inject(function($httpBackend, _Foursquare_) {
    http = $httpBackend;
    foursquare = _Foursquare_;
  }));

  afterEach(function() {
    http.verifyNoOutstandingExpectation();
  });

  it('has the method we want', function() {
    expect(foursquare.nearbyFood).toBeDefined();
  });

  it('calls the right URL', function() {
    http.expectGET(/https:\/\/api.foursquare.com\/v2\/venues\/search\?ll=40,-90/).respond({
      meta: { code: 200 },
      response: {
        venues: [
          {}, {}
        ]
      }
    });
    var results;
    foursquare.nearbyFood({latitude: 40, longitude: -90}).then(function(response) {
      results = response;
    });
    http.flush();
    expect(results.venues.length).toEqual(2);
  });
});
