# Greenlight Digital banner

Greenlight Digital banner is a test project, in which a 1233x400 pixels HTML5 responsive banner was developed. Two `createJS` libraries where used to create canvas with animations. Those are `easelJS` and `tweenJS` 

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


## License
MIT

## Version
0.0.1
