import { Meteor } from 'meteor/meteor';
import { Template}  from 'meteor/templating';
import { Session } from 'meteor/session';

Template.ui.onCreated( () => {
    Meteor.subscribe('Games');
});

Template.ui.events( {
    "click #play-btn": () => {
        Session.set("inGame", true);
        Meteor.call("games.play");
        Meteor.subscribe('MyGame');
    }
});

Template.ui.helpers({
    inGame: () => {
        return Session.get("inGame");
    },
    status: () => {
        
    }
});