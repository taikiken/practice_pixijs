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
	var renderer = PIXI.autoDetectRenderer(1280, 720);

	var canvas = renderer.view;

	canvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';

	// Add the canvas to the HTML document
	document.getElementById('js-page').appendChild(canvas);

	// Create a container object called the `stage`
	var stage = new PIXI.Container();

	// Tell the `renderer` to `render` the `stage`
	renderer.render(stage);

/***/ }
/******/ ]);