(function () {
    'use strict';

    bbWeather.HomeView = Marionette.ItemView.extend({
        initialize: function (options) {
        },
        template: '#home-template',
        el: "#container_weather"
    });
})();