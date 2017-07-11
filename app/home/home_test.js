'use strict';

describe('myApp.home module', function() {

  beforeEach(module('myApp.home'));

  describe('home controller', function(){

    it('should init with a controller', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl).toBeDefined();
    }));

    it('should init with a valid number', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      expect(homeCtrl.validNumber(homeCtrl.number)).toBe(true);
    }));

    it('should return invalid if number < 0', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      homeCtrl.number = -1;
      expect(homeCtrl.validNumber(homeCtrl.number)).toBe(false);
    }));

    it('should return invalid if number > 100', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      homeCtrl.number = 200;
      expect(homeCtrl.validNumber(homeCtrl.number)).toBe(false);
    }));

    it('should have a button to toggle valid number', inject(function($controller) {
      var homeCtrl = $controller('HomeCtrl');
      homeCtrl.toggleValid(homeCtrl.validNumber(homeCtrl.number));
      expect(homeCtrl.validNumber(homeCtrl.number)).toBe(false);
    }))

  });
});
