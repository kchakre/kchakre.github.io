define([
	'marionette',
	'views/videoTranscript'
],

function(Marionette, VideoTranscriptView) {

	var VideoTranscriptsView = Marionette.CollectionView.extend({
		itemView: VideoTranscriptView
	});

	return VideoTranscriptsView;
});