define([
	'marionette',
	'views/videoItem'
],

function(Marionette, VideoItemView) {

	var VideoSearchResults = Marionette.CollectionView.extend({
		itemView: VideoItemView
	});

	return VideoSearchResults;
});