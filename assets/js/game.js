

var Game = {
	preload: function() {
		game.load.image('block', './assets/images/snake.png');
		game.load.image('brick', './assets/images/apple.png');

		if (/Mobile|Android|webOS|iPhone|iPad|iPod|BlackBerry|BB|PlayBook|IEMobile|Windows Phone|Kindle|Silk|Opera Mini/i.test(navigator.userAgent)) {
		    console.log("This is running on a mobile device. ");
		}
		else {
			console.log("This is not running on a mobile device. ");
		}
	}, 

	create: function() {
		

		// Set up a Phaser controller for keyboard input. 
		cursors = game.input.keyboard.createCursorKeys(); 

		game.stage.backgroundColor = '#061f27'; 



    	button = game.add.button(game.world.centerX - 95, 400, 'brick', this.actionOnClick, this, 2, 1, 0);
	    button.onInputOver.add(this.over, this);
	    button.onInputOut.add(this.out, this);



		// Add text to the top of the game.
		textStyle = {
			font: "bold 14px sans-serif", 
			fill: "#46c0f9", 
			align: "center", 
			wordWrap: true, 
			wordWrapWidth: 200
		};

		this.displayWelcomeText()
	}, 

	update: function() {
		
	},

	over: function() {
		console.log("over");
	},

	out: function() {
		console.log("out");
	},

	actionOnClick: function() {
		console.log("click");
		game.state.start('Game_Over');
	},

	displayWelcomeText: function() {
		let textToDisplay = "Hello " + userName + ", you have " + userAttempts.toString() + " attempts remaining. ";
		welcomeText = game.add.text(screenWidth/2, screenHeight/2, textToDisplay, textStyle); 
		welcomeText.anchor.x = 0.5;
		welcomeText.anchor.y = 0.5;
		welcomeText.setShadow(3, 3, 'rgba(0,0,0,0.5)', 5);
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