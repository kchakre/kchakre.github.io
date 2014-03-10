define([
    'backbone',
    'marionette',
    "settings"
],

function(Backbone, Marionette, settings) {
    var HeaderView = Marionette.ItemView.extend({
    	el: '#siteHeader',
    	events: {
    		"submit #searchForm": "submitSearch"
    	},
    	ui: {
    		'searchInput': '#searchInput'
    	},
    	initialize: function() {
    		this.bindUIElements();
    	},
    	submitSearch: function(e) {
    		e.preventDefault();
    		var queryString = this.ui.searchInput.val();
    		var searchURL = "search/" + queryString;
    		Backbone.history.navigate(searchURL, {trigger: true});
    	}
    });

    return HeaderView;
});