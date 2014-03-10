requirejs.config({
    deps: ['main'],
    paths: {
        backbone: '../bower_components/backbone/backbone',
        handlebars: '../bower_components/handlebars/handlebars',
        //dust: '../bower_components/dustjs-linkedin/lib/dust',
        //dustHelpers: '../bower_components/dustjs-linkedin-helpers/lib/dust-helpers',
        //dustMarionette: '../bower_components/marionette-dust/src/backbone.marionette.dust',
        jquery: '../bower_components/jquery/jquery',
        foundation: '../js/foundation.min',
        marionette: '../bower_components/marionette/lib/core/amd/backbone.marionette',
        underscore: '../bower_components/lodash/lodash',
        'backbone.wreqr' : '../bower_components/backbone.wreqr/lib/amd/backbone.wreqr',
        'backbone.eventbinder' : '../bower_components/backbone.eventbinder/lib/amd/backbone.eventbinder',
        'backbone.babysitter' : '../bower_components/backbone.babysitter/lib/amd/backbone.babysitter'
    },
    shim: {
        backbone: {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
        foundation: {
            deps: ['jquery'],
            exports: '$'
        },
        handlebars: {
            exports: 'Handlebars',
            init: function() {
              this.Handlebars = Handlebars;
              return this.Handlebars;
            }
        },
        underscore: {
            exports: '_'
        }
    }
});
