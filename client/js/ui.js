import { Meteor } from 'meteor/meteor';
import { Template}  from 'meteor/templating';

Template.ui.onCreated( () => {
    Meteor.subscribe('Games');
});