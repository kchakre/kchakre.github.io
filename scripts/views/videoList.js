define([
	'marionette',
	'views/videoItem',
    'settings',
    'templates'
],

function(Marionette, VideoItemView, settings, templates) {

	var VideoListView = Marionette.CompositeView.extend({
        template: templates[settings.templatesBase + "videoList.html"],
		itemView: VideoItemView,
        appendHtml: function(collectionView, itemView) {
            collectionView.$('.videosList').append(itemView.el);    
        }
	});

	return VideoListView;
});