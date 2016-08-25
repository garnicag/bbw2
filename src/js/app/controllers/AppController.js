bbWeather.AppController = Marionette.AppRouter.extend({

    initialize: function() {

    },
    index: function() {
    	this.homeView = new bbWeather.HomeView();
    	this.homeView.render();
    },
    findCity: function(city) {
    	this.weatherView = new bbWeather.WeatherView({
    		city: city
    	});
    	this.weatherView.render();
    }
});
