import { Meteor } from 'meteor/mongo';
import { gameLogic } from './gameLogic.js';

Games = new Mongo.Collection("games");

Meteor.methods({
    "games.play"() {

    }
});