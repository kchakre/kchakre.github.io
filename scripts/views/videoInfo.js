define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var VideoInfoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "videoInfo.html"],
        events: {
        	'click #makeVideoBig': 'makeVideoBig'
        },
        ui: {
        	'pandoraVideo': '#pandoraVideo'
        },
        makeVideoBig: function(e) {
        	var bigVideoURL = this.model.get("videoURL240");
        	this.ui.pandoraVideo.attr("src", bigVideoURL);
        }
    });

    return VideoInfoView;
});