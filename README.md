# Pixel Art

<br />

Description: A simple script to apply pixel art to any block HTML element

Source: https://github.com/joeboylson/pixelArt/blob/master/js/pixelArt.js

<br />

<br />

# Usage

1. download source and place it in your project

2. link the source in your HTML:

> `<script src="./js/pixelArt.js">  </script>`

3. instantiate a new pixelArt object and generate.

```
    // declare your colors
    // supports any css color property
    colors = ['red', 'orange', 'yellow' . . .]

    // pass them to the object
        // elementId: the id of the element you want to apply your art to
        // rows: the number of "pixels" across
        // cols: the number of "pixels" down
        // colors: your array of colors; must be equal to rows*cols
        // unit: the unit of measurement

    const pixelHeart = new pixelArt("pixelart", 6, 7, colors, '10px')
    
    // call generate to apply
    pixelHeart.generate();
```

[check out this demo file](https://github.com/joeboylson/pixelArt/blob/master/index.html)

<br />

<br />

# Contact

To reach out with any question, feedback, or suggestions, [send me a message here](http://joeboylson.herokuapp.com/#email)