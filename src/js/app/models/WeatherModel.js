(function() {

    bbWeather.WeatherModel = Backbone.Model.extend({
        initialize: function(){
            this.url = "";
            this.data = {};
        },
        setUrl: function(_city) {
            var city = _city || bbWeather.default_city;
            this.url = "http://api.openweathermap.org/data/2.5/weather?" + $.param({
            	units: 'metric',
            	q: city,
            	APPID: bbWeather.api_key
            });
        }
    });
})();
