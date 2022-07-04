"use strict";

/* global XXH */
/* exported --
    p3_preload
    p3_setup
    p3_worldKeyChanged
    p3_tileWidth
    p3_tileHeight
    p3_tileClicked
    p3_drawBefore
    p3_drawTile
    p3_drawSelectedTile
    p3_drawAfter
*/

//function p3_preload() {}

let spritesheet;
let spritesheet2;
let spritesheet3;
let spritesheet4;
let spritelist

let m = 0;

function preload() {
  spritesheet = loadImage('plane.png');
  spritesheet2 = loadImage('plane2.png');
  spritesheet3 = loadImage('plane3.png');
  spritesheet4 = loadImage('plane4.png');

  spritelist = [spritesheet, spritesheet2, spritesheet3, spritesheet4]


  console.log(spritesheet);
}

function p3_setup() {}

let worldSeed;



function p3_worldKeyChanged(key) {
  worldSeed = XXH.h32(key, 0);
  noiseSeed(worldSeed);
  randomSeed(worldSeed);
}

function p3_tileWidth() {
  return 12;
}
function p3_tileHeight() {
  return 12;
}

let [tw, th] = [p3_tileWidth(), p3_tileHeight()];

let clicks = {};

function p3_tileClicked(i, j) {
  let key = [i, j];
  clicks[key] = 1 + (clicks[key] | 0);
  console.log(i, j);
}

function p3_drawBefore() {}

//Terrain level[Max 10]
let inner = 6.2
let edge3 = 5.8
let edge2 = 5.5
let edge = 5.3
let sky = 5

function p3_drawTile(i, j) {
  noStroke();
  //fill(noise(i, j) * 255)
  //let c = 255 * noise(0.1 * i, 0.1 * j);
  //fill(c);

  let h = 10 * noise(0.1 * i, 0.1 * -j);
    //console.log(h);

    if (h < edge) {
      fill(64, 127, 188);

    } else if (h > edge && h < edge2) {
      fill(116, 173, 174);

    } else if (h > edge2 && h < edge3) {
      fill(144, 203, 203)

    } else if (h > edge3 && h < inner) {
      fill(194, 214, 208)

    } else {
        fill(236, 230, 205);
    }

  push();

  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  endShape(CLOSE);

  let n = clicks[[i, j]] | 0;
  
  if (n % 2 == 1) {
    //fill(255, 255, 0, 180);
    //ellipse(th/2, tw/2, 10, 10);

    image(spritelist[3], 0, 0, 12, 12)

     /* There was an attempt here to get the airplanes spawn in different
     directions, but with this function built into the framerate, 
     The airplanes would just start spinning around. */

    //image(spritelist[Math.floor(Math.random() * 4)], 0, 0, 12, 12);
    // if (m < 4) {
    //   image(spritelist[m], 0, 0, 12, 12);
    //   m++
    // } else {
    //   m = 0
    //   image(spritelist[m], 0, 0, 12, 12);
    // }
  }

  pop();
}

function p3_drawSelectedTile(i, j) {
  noFill();
  stroke(0, 255, 0, 128);

  beginShape();
  vertex(0, 0);
  vertex(0, tw);
  vertex(th, tw);
  vertex(th, 0);
  endShape(CLOSE);

  noStroke();
  fill(0);
  text("(" + [i, j] + ")", 0, 0);
}

function p3_drawAfter() {}
