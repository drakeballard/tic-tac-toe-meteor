class GameLogic
{
    newGame() {
    
    userIsAlreadyPlaying() {
        const game = Games.findOne({$or:[
        {player1: Meteor.userId()},
        {player2: Meteor.userId()}]
        });
    
        if(game !== undefined)
        return true;
    
        return false;
    }
    joinGame(game) {
        if(game.player2 === "" && Meteor.userId() !== undefined) {
          Games.update(
            {_id: game._id},
            {$set: {
              "player2": Meteor.userId(),
              "status": game.player1
              }
            }
          );      
        }
      } 
      
    
        if(!this.userIsAlreadyPlaying()) {
            Games.insert({
                player1: Meteor.userId(),
                player2: "",
                moves: [],
                status: "waiting",
                result: ""
            });
        }
    }
}

export const gameLogic = new GameLogic();