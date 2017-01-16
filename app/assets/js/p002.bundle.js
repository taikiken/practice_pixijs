/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "assets/js/bundle";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	/*!
	 * Copyright (c) 2011-2017 inazumatv.com, inc.
	 * @author (at)taikiken / http://inazumatv.com
	 * @date 2017/01/04 - 14:53
	 *
	 * Distributed under the terms of the MIT license.
	 * http://www.opensource.org/licenses/mit-license.html
	 *
	 * This notice shall be included in all copies or substantial portions of the Software.
	 *
	 */
	// use strict は本来不要でエラーになる
	// 無いと webpack.optimize.UglifyJsPlugin がコメントを全部削除するので記述する
	/* eslint strict: [0, "global"] */

	'use strict';

	var PIXI = self.PIXI;

	// --------------------------------
	var renderer = PIXI.autoDetectRenderer(480, 270);

	var canvas = renderer.view;

	canvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
	// canvas.style.cssText = 'position: absolute; top: 0; left: 0;';

	// Add the canvas to the HTML document
	document.getElementById('js-page').appendChild(canvas);

	// Create a container object called the `stage`
	var stage = new PIXI.Container();

	var movie = null;
	// let animationId = 0;

	var animate = function animate() {
	  requestAnimationFrame(animate);
	  // Tell the `renderer` to `render` the `stage`
	  renderer.render(stage);
	};

	var spriteEnd = function spriteEnd() {
	  console.log('sprite ned');
	  // movie.gotoAndStop(0);
	};

	var spriteLoaded = function spriteLoaded() {
	  var list = Array(16).fill(0);
	  var count = 7;
	  var frames = list.map(function () {
	    // magically works since the spritesheet was loaded with the pixi loader
	    var num = String(count);
	    if (num.length === 1) {
	      num = '0' + num;
	    }
	    // count up
	    count += 2;
	    return PIXI.Texture.fromFrame('yumi_nure_level1_00' + num + '.bmp');
	  });
	  // movie
	  // movie = new PIXI.extras.AnimatedSprite(frames);
	  movie = new PIXI.extras.AnimatedSprite(frames);
	  /*
	                                                   * A MovieClip inherits all the properties of a PIXI sprite
	                                                   * so you can change its position, its anchor, mask it, etc
	                                                   */
	  // move the sprite t the center of the screen
	  movie.position.set(0);

	  // なぜか scale されるので size を設定する
	  movie.width = 480;
	  movie.height = 270;

	  // center the sprites anchor point
	  movie.anchor.set(0);
	  movie.animationSpeed = 0.2;

	  // loop を off にし complete とで先頭を表示
	  // movie.loop = false;
	  //
	  movie.onComplete = spriteEnd;
	  // ---------------

	  movie.play();
	  // console.log('movie', movie);
	  stage.addChild(movie);

	  animate();
	};

	// sprite json
	PIXI.loader.
	add('/assets/sprite/yumi_sprite/yumi01.json').
	load(spriteLoaded);

/***/ }
/******/ ]);