define([
    'backbone',
    'marionette',
    "settings",
    "templates"
],

function(Backbone, Marionette, settings, templates) {
    var PlayVideoView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "playVideo.html"],
        events: {
        	'click #makeVideoBig': 'makeVideoBig'
        },
        ui: {
        	'pandoraVideo': '#pandoraVideo'
        },
        initialize: function(params) {
            this.timing = params.timing;
            return true;
        },
        makeVideoBig: function(e) {
        	var bigVideoURL = this.model.get("videoURL240");
        	this.ui.pandoraVideo.attr("src", bigVideoURL);
        },
        templateHelpers: function() {
            if (this.timing) {
                return {
                    'inPoint': this.timing.split("-")[0],
                    'outPoint': this.timing.split("-")[1]
                }
            } else {
                return {}
            }
        },
        onRender: function() {
            if (this.timing) {
                var inSeconds = this.timing.split("-")[0];
                var videoPlayer = this.ui.pandoraVideo.get(0);
                videoPlayer.onload = function() {
                    videoPlayer.currentTime = inSeconds;
                    videoPlayer.play();
                }
            }
        }
    });

    return PlayVideoView;
});