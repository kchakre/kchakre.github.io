define([
	'backbone',
	'models/videoList'
],

function(Backbone, VideoList) {
	var VideoLists = Backbone.Collection.extend({
		model: VideoList
	});

	return VideoLists;
});