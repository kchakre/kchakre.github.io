define([
    "underscore",
    "backbone",
    "marionette",
    "core/router",
    "views/header",
    "foundation"
],

function (_, Backbone, Marionette, Router, HeaderView) {

    var App = new Backbone.Marionette.Application();

    // An init function for your main application object
    App.addInitializer(function () {
        this.root = '/';
        this.router = new Router();
        this.addRegions({
            'content': '#content'
        });
        this.user = {};
        this.views = {
            'header': new HeaderView()
        }
    });

    // Add as many of these as you like
    App.addInitializer(function () {
        console.log("app started");
        $(document).foundation();
        Backbone.history.start({ root: App.root });
    });

    // Return the instantiated app (there should only be one)
    return App;

});
