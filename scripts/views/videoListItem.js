define([
	'marionette',
    "settings",
    "templates"
],

function(Marionette, settings, templates) {
	var VideoListItemView = Marionette.ItemView.extend({
		template: templates[settings.templatesBase + "videoListItem.html"]
	});




	return VideoListItemView;

});