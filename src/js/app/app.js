
(function(){
	'use strict';

	bbWeather.App = new Marionette.Application(); 

	bbWeather.App.on('before:start', function (options) {
        //options are passed in on app.start() from index.html
        //add additional options if needed here
        console.log('App starting!');
    });

    bbWeather.App.on('start', function(options) {
        //options are passed in on app.start() from index.html
        //you can add additional options in the before:start event and 
        //they will end up here
        options = options || {};
        console.log('App started!');
        //application regions
        bbWeather.App.addRegions({
          mainRegion: "#main-view"
        });
        //this starts the MainModule
        //you can pass in options to the module, we will just send them all along
        bbWeather.App.module('Main').start(options);

        //Per backbone.js docs: During page load, after your application has finished creating all of its routers, 
        //be sure to call Backbone.history.start(), or Backbone.history.start({pushState: true}) to route the initial URL.
        if (Backbone.history) {
            Backbone.history.start();
        }
    });

    bbWeather.App.on('all', function (evt, model) {
        console.log('APP:DEBUG: Event Caught: ' + evt, model);
    });
})();