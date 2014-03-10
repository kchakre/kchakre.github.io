define([
	'marionette',
	'views/videoItem'
],

function(Marionette, VideoItemView) {

	var VideoListView = Marionette.CollectionView.extend({
		itemView: VideoItemView
	});

	return VideoListView;
});