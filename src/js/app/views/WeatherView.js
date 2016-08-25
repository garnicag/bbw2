(function () {
    'use strict';

    bbWeather.WeatherView = Marionette.ItemView.extend({
        initialize: function (options) {
            options = options || {};
            this.model = new bbWeather.WeatherModel();
            this.model.setUrl(options.city);
            this.model.fetch();
            this.listenEvents();
        },
        listenEvents: function() {
            this.listenTo(this.model, 'sync', _.bind(this.render, this));
        },
        render: function() {
            var source   = $(this.template).html();
            var template = Handlebars.compile(source);
            var html = template(this.model.attributes);
            this.$el.html(html);
        },
        template: '#weather-template',
        el: "#container_weather"
    });
})();