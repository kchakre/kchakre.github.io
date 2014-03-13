define([
    "marionette",
    "core/controller"
],

function(Marionette, Controller) {
    var appRoutes = {
        '': 'home',
        'signin': 'signin',
        'video/:id/videoplay/:timing': 'playVideo',
        'video/:id/videoplay': 'playVideo',
        'video/:id/info': 'videoInfo',
        'video/:id/layers': 'videoLayers',
        'list/:id': 'list',
        'list/:id/:page': 'list',
        'search/:query': 'search',
        'search/:query/:page': 'search',
        'media/:id': 'media'
        
    };

    var router = Marionette.AppRouter.extend({
        controller: Controller,
        appRoutes: appRoutes
    });
    // var router = Marionette.AppRouter.extend({
    //     controller: Controller,
    //     appRoutes: appRoutes,
    //     _extractParameters: function(route, fragment) {
    //         var params = route.exec(fragment).slice(1);
    //         return _.map(params, function(param) {
    //             return param ? param : null;
    //         });
    //     }
    // });

    return router;
})
