define([
	'backbone',
	'models/layer'
],

function(Backbone, Layer) {
	var Layers = Backbone.Collection.extend({
		model: Layer
	});

	return Layers;
});