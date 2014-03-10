define([
	'backbone',
	'models/video'
],

function(Backbone, Video) {
	var Videos = Backbone.Collection.extend({
		model: Video
	});

	return Videos;
});