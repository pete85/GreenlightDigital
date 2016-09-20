// Scripts - Greenlight Digital banner test

// JavaScript Document

// EaselJS
function init() {

	// Define variables
	var stage,
		box,
		heading,
		description,
		cta,
		sheen;

	stage = new createjs.Stage("bannerCanvas");


	// // Assign box
	box = new createjs.Shape();
	box.graphics.beginFill("rgba(227, 226, 225, 0.8)").drawRect(0, 0, 400, 240);
	box.x = 650;
	box.y = 150;
	stage.addChild(box);	

	// Assign heading
	heading = new createjs.Text("Find Electrolux Cooker, Oven & Hob parts", "26px box-regular", "#0d4597");
	heading.x = 670;
	heading.y = 170;
	heading.lineWidth = 300;
	heading.textAlign = "left";
	stage.addChild(heading);

	// Assign description
	description = new createjs.Text("Whenever you're after a new, replacement or missing part for the cooker - here's where you'll find all the genuine Electrolux spare parts", "18px box-regular", "#000000");
	description.x = 670;
	description.y = 240;
	description.lineWidth = 360;
	description.textAlign = "left";
	stage.addChild(description);

	// Assign cta
	cta = new createjs.Bitmap("images/cta.jpg");
	cta.x = 670;
	cta.y = 330;
	stage.addChild(cta);

	// Assign sheen
	sheen = new createjs.Bitmap("images/sheen.png");
	sheen.x = 630;
	sheen.y = 330;
	stage.addChild(sheen);

	// Animate box
	createjs.Tween.get(box, { loop: false })
		.to({ alpha: 0, y: 300 }, 0)
	  	.to({ alpha: 1, y: 150 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate heading
	createjs.Tween.get(heading, { loop: false })
	  	.to({ alpha: 0, y: 170 }, 0)
	  	.to({ alpha: 1, y: 170 }, 4000, createjs.Ease.getPowInOut(5))

	// Animate description
	createjs.Tween.get(description, { loop: false })
	  	.to({ alpha: 0, y: 240 }, 0)
	  	.to({ alpha: 1, y: 240 }, 5000, createjs.Ease.getPowInOut(5))

	// Animate cta
	createjs.Tween.get(cta, { loop: false })
		.to({ alpha: 0, y: 400 }, 0)
	  	.to({ alpha: 1, y: 330 }, 6000, createjs.Ease.getPowInOut(15))

	// // Animate sheen
	// createjs.Tween.get(sheen, { loop: false })
	// 	.to({ alpha: 0, x: 630 }, 0)
	//   	.to({ alpha: 1, x: 910 }, 7000, createjs.Ease.getPowInOut(25))
	//   	.to({ alpha: 0, x: 950 }, 100)

	// Animate sheen
	createjs.Tween.get(sheen, { loop: false })
	  	.to({ alpha: 0, y: 330 }, 0)
	  	.to({ alpha: 0, y: 330 }, 4000)
	  	.to({ alpha: 1, y: 330, x: 910 }, 600)
	  	.to({ alpha: 0, y: 330, x: 930 }, 200, createjs.Ease.getPowOut(40))

	createjs.Ticker.setFPS(60);
	createjs.Ticker.addEventListener("tick", stage);

}