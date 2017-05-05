'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.current
 * @description
 * # current
 * Factory in the weatherappApp.
 */

  angular.module('weatherappApp')
    .factory('current', function ($resource) {
      // Service logic
      // ...

      // Public API here
      return $resource('http://api.openweathermap.org/data/2.5/weather?q=:location&units=imperial&APPID=07e695f934aeb5d1b818b0f063db871a', {}, {
        query: {
          method:'GET',
          params:{
            location: 'Seattle,us'
          },
          isArray:false
        }
      });
    });
