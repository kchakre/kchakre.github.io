define([
	'marionette',
    "settings",
    "templates"
],

function(Marionette, settings, templates) {
	var VideoTranscriptView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoTranscript.html"]
	});

	return VideoTranscriptView;

});