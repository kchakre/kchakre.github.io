define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var HomeView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "home.html"]
    });

    return HomeView;
});