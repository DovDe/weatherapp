'use strict';

/**
 * @ngdoc service
 * @name weatherappApp.citysearch
 * @description
 * # citysearch
 * Factory in the weatherappApp.
 */


 angular.module('weatherappApp')
   .factory('citysearch', function ($resource) {
     // Service logic
     // ...

     // Public API here
     return $resource('http://api.openweathermap.org/data/2.5/find?q=:query&type=like&mode=json&APPID=07e695f934aeb5d1b818b0f063db871a', {}, {
       find: {
         method: 'GET',
         params: {
           query: 'seattle'
         },
         isArray: false
       }
     });
   });
