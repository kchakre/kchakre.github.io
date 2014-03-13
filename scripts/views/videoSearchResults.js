define([
	'marionette',
	'views/videoItem',
    'settings',
    'templates'
],

function(Marionette, VideoItemView, settings, templates) {
	var VideoSearchResults = Marionette.CompositeView.extend({
		itemView: VideoItemView,
        template: templates[settings.templatesBase + "videoSearchResults.html"],
        appendHtml: function(collectionView, itemView) {
            collectionView.$('.videosList').append(itemView.el);
        }
	});

	return VideoSearchResults;
});