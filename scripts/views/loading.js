define([
    "backbone",
    "marionette",
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var LoadingView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "loading.html"]
    });

    return LoadingView;

});