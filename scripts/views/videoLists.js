define([
	'marionette',
	'views/videoListItem'
],

function(Marionette, VideoListItemView) {

	var VideoListsView = Marionette.CollectionView.extend({
		itemView: VideoListItemView
	});

	return VideoListsView;
});