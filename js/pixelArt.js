/* 
Author: Joe Boylson
https://joeboylson.herokuapp.com
*/

/*
description: 
    chunks an array into smaller pieces
    returns an array of arrays
*/

const chunk = (array, sectionLength) => {
    if (!array.length) {
        return [];
    }
    const head = array.slice(0, sectionLength);
    const tail = array.slice(sectionLength);

    return [head, ...chunk(tail, sectionLength)];
};

/*
pixelArt class
    elementId: the id of the element you want to apply your art to
    rows: the number of "pixels" across
    cols: the number of "pixels" down
    colors: your array of colors; must be equal to rows*cols
    unit: the unit of measurement
*/

function pixelArt(elementId, rows, cols, colors, unit) {

    this.element = document.getElementById(elementId);
    this.rows = rows;
    this.cols = cols;
    this.colors = colors;
    this.unit = unit;

    this.colorsLength = colors.length;
    this.rowSet = chunk(colors, cols);
    this.pixelWrapper = document.createElement('div');
}

pixelArt.prototype.generate = function () {

    // check to make sure correct number of colors are passed in
    if ((this.rows * this.cols) == this.colorsLength) {

        // set margin for pixel wrapper; compensates for box-shadow overflow
        this.pixelWrapper.style.margin =
            `-${this.unit} calc(${this.unit} * ${this.rows}) calc(${this.unit} * ${this.rows}) 0px`


        let rootPixel = document.createElement('div')

        // set the style for the root pixel
        rootPixelStyle = {
            display: 'block',
            width: this.unit,
            height: this.unit,
            'background-color': 'transparent',
            'box-shadow': ''
        }

        // loop through each row and column and set the color and the position
        this.rowSet.map((row, rowIndex) => {
            row.map((color, colIndex) => {

                // add "," after each string except the last
                let delim = ((rowIndex + 1) * (colIndex + 1)) == this.colorsLength ? '' : ','
                rootPixelStyle['box-shadow'] = rootPixelStyle['box-shadow'].concat(
                    `${color} calc(${colIndex} * ${this.unit}) calc(${rowIndex + 1} * ${this.unit})${delim}`
                )
            });
        });

        // assign css properties to rootPixel
        Object.assign(rootPixel.style, rootPixelStyle);

        // set children
        this.pixelWrapper.appendChild(rootPixel)
        this.element.appendChild(this.pixelWrapper)
    }

    // do not generate art - throw console error
    else {
        console.error(
            `expected ${this.rows * this.cols} colors (${this.rows} rows,  ${this.cols} cols); recieved ${this.colorsLength}`
        )
    }
}