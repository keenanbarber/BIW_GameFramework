var game = new Phaser.Game(600, 450, Phaser.AUTO, 'game_phaser');

// States
game.state.add('Menu', Menu);
game.state.add('Game', Game);
game.state.add('Game_Over', Game_Over);

// Initial State
game.state.start('Game');

// Game Information
var description = "";
var userName = "Keenan"; 
var userAttempts = 0; 
var userScore = 0;