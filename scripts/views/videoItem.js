define([
	'marionette',
    "settings",
    "templates"
],

function(Marionette, settings, templates) {
	var VideoItemView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoItem.html"]
	});

	return VideoItemView;

});