bbWeather.Routers = Marionette.AppRouter.extend({

    appRoutes: {
        'city/:city': 'findCity',
        '*default': 'index',
    },

    controller: new bbWeather.AppController()

});