# p3-endless-scene-starter

Credit: Adam Smith/Isaac Karth 
Edited by: Asiiah Song

Remixed by: Kai Turner.

Clouds!: Endless Scene (through the air!)
 
For this assignment, we were given a “noise” function that didn’t end up being terribly useful on its own. After hours of digging through stuff, I finally found a perlin noise version that would create basic landscapes. Figuring most of my classmates would attempt to use the ground, I decided to use the sky and fluffy clouds. Using a simple if/else block, I was able to tune in the right “noise” values and some good colors to create some reasonably decent puffy clouds.
 
As with any real world sky scene, it would be pretty serene if it weren’t for some annoying jumbo-jets in the way! I created some airplane pixel-art and imported it into P5 (better than futzing with P5’s limited shapes). As much as I wanted the planes to be a little bigger and also point in random directions, fly around/create contrails, I was limited by the example code’s functions that didn’t give me much room to expand. While I did create airplanes pointing in various directions, it was not possible to implement them without them spazzing out (60 fps is scary). I believe creating a better function that’s independent of the autotiling stuff would be a lot better. Next time. The remnants of my attempt can be found near the bottom of the “world.js” file. 