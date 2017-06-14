

var Game = {
	preload: function() {
		game.load.image('block', './assets/images/snake.png');
		game.load.image('brick', './assets/images/apple.png');
	}, 

	create: function() {
		

		// Set up a Phaser controller for keyboard input. 
		cursors = game.input.keyboard.createCursorKeys(); 

		game.stage.backgroundColor = '#061f27'; 


/*
    	button = game.add.button(game.world.centerX - 95, 400, 'brick', this.actionOnClick, this, 2, 1, 0);
	    button.onInputOver.add(this.over, this);
	    button.onInputOut.add(this.out, this);
*/


		// Add text to the top of the game.
		textStyle = {
			font: "bold 14px sans-serif", 
			fill: "#46c0f9", 
			align: "center"
		};

		this.displayWelcomeText()
	}, 

	update: function() {
		
	},

	displayWelcomeText: function() {
		let textToDisplay = "Hello " + userName + ", you have " + userAttempts.toString() + " attempts remaining. ";
		welcomeText = game.add.text(90, 18, textToDisplay, textStyle); 
		this.colorText(welcomeText, 6, 11, '#ffffff', '#46c0f9');
	},
 
	randomBetween: function(x, y) { //Inclusive
        return ((x-1) + Math.ceil(Math.random() * (y-(x-1))));
    },

    colorText: function(text, i1, i2, newColor, originalColor) {
    	text.addColor(newColor, i1);
    	text.addColor(originalColor, i2+1);
    },

	test: function() {
		console.log("This is a test.");
	}

};