

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
	}, 

	// when the player begins to swipe we only save mouse/finger coordinates, remove the touch/click
	// input listener and add a new listener to be fired when the mouse/finger has been released,
	// then we call endSwipe function
	beginSwipe: function(){
		startX = game.input.worldX;
		startY = game.input.worldY;
		game.input.onDown.remove(beginSwipe);
     	game.input.onUp.add(endSwipe);
	},
	
	// function to be called when the player releases the mouse/finger
	endSwipe: function(){
		// saving mouse/finger coordinates
		endX = game.input.worldX;
		endY = game.input.worldY;
		// determining x and y distance travelled by mouse/finger from the start
		// of the swipe until the end
		var distX = startX-endX;
		var distY = startY-endY;
		// in order to have an horizontal swipe, we need that x distance is at least twice the y distance
		// and the amount of horizontal distance is at least 10 pixels
		if(Math.abs(distX)>Math.abs(distY)*2 && Math.abs(distX)>10){
			// moving left, calling move function with horizontal and vertical tiles to move as arguments
			if(distX>0){
                    move(-1,0);
               }
               // moving right, calling move function with horizontal and vertical tiles to move as arguments
               else{
                    move(1,0);
               }
		}
		// in order to have a vertical swipe, we need that y distance is at least twice the x distance
		// and the amount of vertical distance is at least 10 pixels
		if(Math.abs(distY)>Math.abs(distX)*2 && Math.abs(distY)>10){
			// moving up, calling move function with horizontal and vertical tiles to move as arguments
			if(distY>0){
                    move(0,-1);
               }
               // moving down, calling move function with horizontal and vertical tiles to move as arguments
               else{
                    move(0,1);
               }
		}	
		// stop listening for the player to release finger/mouse, let's start listening for the player to click/touch
		game.input.onDown.add(beginSwipe);
     	game.input.onUp.remove(endSwipe);
	}

};