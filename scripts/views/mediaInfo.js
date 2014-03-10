define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var MediaInfoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "mediaInfo.html"],
        
    });

    return MediaInfoView;
});