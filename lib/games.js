import { Meteor } from 'meteor/mongo';
import { gameLogic } from './gameLogic.js';

Games = new Mongo.Collection("games");

Meteor.methods({
    "games.play"() {
      const game = Games.findOne({status: "waiting"});
  
      if(game === undefined) {
        gameLogic.newGame();
      } else if(game !== undefined && game.player1 !== this.userId && game.player2 === "") {
        gameLogic.joinGame(game);
      }
    }
  });