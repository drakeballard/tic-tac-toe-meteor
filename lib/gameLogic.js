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
    validatePosition(position) {
        for (let x = 0; x < 3; x++) {
          for (let y = 0; y < 3; y++) {
            if (position === x + '' + y)
              return true;
          }
        }
    
        throw new Meteor.Error('invalid-position', "Selected position does not exist... please stop trying to hack the game!!");
      }  
    addNewMove(position) {
        Games.update(
          {status: Meteor.userId()},
          {
            $push: {
              moves: {playerID: Meteor.userId(), move: position}
            }
          }
        );
      }

    setGameResult(gameId, result) {
        Games.update(
          {_id: gameId},
          {
            $set: {
              "result": result,
              "status": "end"
            }
          }
        );
      }   
      
    
    updateTurn(game) {
        let nextPlayer;
    
        if(game.player1 === Meteor.userId())
        nextPlayer = game.player2;
        else
        nextPlayer = game.player1;
    
        Games.update(
        {status: Meteor.userId()},
        {
            $set: {
            "status": nextPlayer
            }
        }
        );
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