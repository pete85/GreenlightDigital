# Responsive banner

This is a test project, in which a 1233x400 pixels HTML5 responsive banner was developed. Two `createJS` libraries where used to create canvas with animations. Those are `easelJS` and `tweenJS` 

## Resources used

* [compass.app](http://compass.kkbox.com/)
* [Sass] (http://sass-lang.com/)
* [createJS] (http://createjs.com/) framework


## Tech

* `HTML5`
* `CSS` & `Sass`
* `Javascript` (`createJS`)
* `GitHub`

## Development
### HTML

1. `createJS` libraries and configuration JS file included
```sh
<script src="https://code.createjs.com/createjs-2015.11.26.min.js"></script>
<script src="js/script.js"></script>
```
2. Canvas added
```sh
<body onload="init();">
	<canvas id="bannerCanvas" width="1233" height="400"></canvas>
</body>
```

### CSS
1. Sass project initiated (ONLY FOR DEMONSTRATION PURPOSES AS THERE WAS NO NEED TO USE SASS FOR THIS PROJECT DUE TO A VERY SMALL SIZE OF THE STYLESHEET)
2. Canvas styled
```sh
#bannerCanvas {
  width: 1233px;
  max-width: 100%;
}
```
```sh
#bannerCanvas {
  position: relative;
  display: block;
  overflow: hidden;
  background: url("../images/bg.jpg");
  background-size: contain;
}
```
### JavaScript
1. Configuration JavaScript (`script.js`) created
2. `function init()` implemented:
* Variables declared
* Stage instance created
* Objects created and positioned inside the canvas
* Objects animated

EXAMPLE
```sh
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
	
	// Animate box
	createjs.Tween.get(box, { loop: false })
		.to({ alpha: 0, y: 300 }, 0)
	  	.to({ alpha: 1, y: 150 }, 2000, createjs.Ease.getPowInOut(10))

	// Animate heading
	createjs.Tween.get(heading, { loop: false })
	  	.to({ alpha: 0, y: 170 }, 0)
	  	.to({ alpha: 1, y: 170 }, 4000, createjs.Ease.getPowInOut(5))	
```


## License
MIT

## Version
0.0.1
