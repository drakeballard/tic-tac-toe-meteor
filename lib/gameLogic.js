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