var Game_Over = {

    preload : function() {
        // Load the needed image for this game screen.
        game.load.image('gameover', './assets/images/gameover.png');
    },

    create : function() {

        

    },

    startGame: function () {

        // Change the state back to Game.
        this.state.start('Game');

    }

};
