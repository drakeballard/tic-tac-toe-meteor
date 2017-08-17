class GameLogic
{
    newGame() {
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