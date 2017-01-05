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

const PIXI = self.PIXI;

// --------------------------------
const renderer = PIXI.autoDetectRenderer(1280, 720);

const canvas = renderer.view;

canvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';

// Add the canvas to the HTML document
document.getElementById('js-page').appendChild(canvas);

// Create a container object called the `stage`
const stage = new PIXI.Container();

// Tell the `renderer` to `render` the `stage`
renderer.render(stage);
