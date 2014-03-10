define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var VideosInfoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "videosInfo.html"],
        events: {
        	'click #makeVideosBig': 'makeVideosBig'
        },
        ui: {
        	'pandoraVideos': '#pandoraVideos'
        },
        makeVideosBig: function(e) {
        	var bigVideosURL = this.model.get("videosURL240");
        	this.ui.pandoraVideos.attr("src", bigVideosURL);
        }
    });

    return VideosInfoView;
});