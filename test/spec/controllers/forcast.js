'use strict';

describe('Controller: ForcastCtrl', function () {

  // load the controller's module
  beforeEach(module('weatherappApp'));

  var ForcastCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ForcastCtrl = $controller('ForcastCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(ForcastCtrl.awesomeThings.length).toBe(3);
  });
});
