define([
	'backbone',
	'settings'
],

function(Backbone, settings) {
	var Layer = Backbone.Model.extend({
		initialize: function() {
			this.set("videoId", this.get("id").split("/")[0]);
			this.set("inIcon", this.getInIcon());
			
		},

		'getInIcon': function() {
			var videoId = this.get("videoId");
			var inPoint = this.get("in");
			return settings.pandoraInstance + videoId + "/96p" + inPoint + ".jpg";
		}
	});

	return Layer;
});