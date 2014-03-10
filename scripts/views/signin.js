define([
    "backbone",
    "marionette",
    "settings",
    "templates",
    "helpers/api",
    "app"
],

function(Backbone, Marionette, settings, templates, api, app) {
    var SigninView = Marionette.ItemView.extend({
        template: templates[settings.templatesBase + "signin.html"],
        events: {
            'submit #signinForm': 'submitSignin'            
        },
        ui: {
            'username': '#txt_User',
            'password': '#txt_Password'
        },
        submitSignin: function(e) {
            e.preventDefault();
            var username = this.ui.username.val();
            var password = this.ui.password.val();
            var $xhr = api.signin(username, password);
            $xhr.done(function(response) {
                console.log("response", response);
                if (!response.data) {
                    alert("something bad happened");
                    return;
                }
                if (response.data.errors) {
                    if (response.data.errors.username) {
                        alert("ERROR: " + response.data.errors.username);
                    } else {
                        alert("ERROR: " + response.data.errors.password);
                    }
                } else {
                    var user = response.data.user;
                    app.user = user;
                    Backbone.history.navigate("", {'trigger': true});
                    console.log(response.user);
                }
            });
        }

        
    


    });






    return SigninView;

});