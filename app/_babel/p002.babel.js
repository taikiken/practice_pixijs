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
const renderer = PIXI.autoDetectRenderer(480, 270);

const canvas = renderer.view;

canvas.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%;';
// canvas.style.cssText = 'position: absolute; top: 0; left: 0;';

// Add the canvas to the HTML document
document.getElementById('js-page').appendChild(canvas);

// Create a container object called the `stage`
const stage = new PIXI.Container();

let movie = null;
// let animationId = 0;

const animate = () => {
  requestAnimationFrame(animate);
  // Tell the `renderer` to `render` the `stage`
  renderer.render(stage);
};

const spriteEnd = () => {
  console.log('sprite ned');
  // movie.gotoAndStop(0);
};

const spriteLoaded = () => {
  const list = Array(16).fill(0);
  let count = 7;
  const frames = list.map(() => {
    // magically works since the spritesheet was loaded with the pixi loader
    let num = String(count);
    if (num.length === 1) {
      num = `0${num}`;
    }
    // count up
    count += 2;
    return PIXI.Texture.fromFrame(`yumi_nure_level1_00${num}.bmp`);
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
PIXI.loader
  .add('/assets/sprite/yumi_sprite/yumi01.json')
  .load(spriteLoaded);
