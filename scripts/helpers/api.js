define([
    'jquery',
    'settings'
],

function($, settings) {
    var ApiHelper = function() {
        var instanceBase = settings.pandoraInstance;
        var apiBase = instanceBase + "api/";
        this.cache = {};
        this.q = function(action, data) {
            var cacheKey = JSON.stringify({
                'action': action,
                'data': data
            });
            if (this.cache.hasOwnProperty(cacheKey)) {
                return this.cache[cacheKey];
            }
            var $xhr = $.ajax({
                'url': apiBase,
                'data': {
                    'action': action,
                    'data': JSON.stringify(data)
                },
                'type': 'POST',
                'dataType': 'json'
            });
            this.cache[cacheKey] = $xhr;

            return $xhr;
        };

        this.getFeaturedLists = function() {
            var listQuery = {
                "keys": ["user","name","items","type","status","id","modified","query"],
                "query": {
                    "conditions": [
                            {"key":"status","value":"featured","operator":"="}
                        ],
                        "operator":"&"
                    },
                    "range":[0,19],
                    "sort":[{"key":"position","operator":"+"}]
                }

            return this.q("findLists", listQuery);

        }

        this.init = function() {
            var data = {};
            var action = "init";
            return this.q(action, data);
        };

        this.getVideosInList = function(id) {
            var data = {
                query: {
                    conditions: [{
                        key: 'list',
                        operator: '=',
                        value: id
                    }],
                    operator: '&'
                },
                keys: ['title', 'id'],
                range: [0,50],
                sort: [{key: 'title', operator: '+'}]
            };
            var action = "find";
            return this.q(action, data);
        };

        this.getVideosSearch = function(queryString) {
            var data = {
                query: {
                    conditions: [{
                        key: '*',
                        operator: '=',
                        value: queryString
                    }],
                    operator: '&'
                },
                keys: ['title', 'id'],
                range: [0,50],
                sort: [{key: 'title', operator: '+'}]
            };
            var action = "find";
            return this.q(action, data);          
        };

        this.getPlayVideo = function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

        this.getVideoInfo = function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

        this.getMediaInfo = function(id) {
            var data= {
                'id':id
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

        this.getVideoLayers = function(id) {
            var data= {
                'id': id,
                'keys': ['layers']
            };
            var action='get';
            var $xhr = this.q(action, data);
            return $xhr;
        };

        this.signin = function(username, password) {
            var data = {
                username: username,
                password: password
            };
            var action = "signin";
            var $xhr = this.q(action, data);
            return $xhr;         
        };

    };
    console.log("api helper", ApiHelper);
    //return {'hello': 'hi'};
    return new ApiHelper(); 

});