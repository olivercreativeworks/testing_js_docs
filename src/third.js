/** @module stuff/funtimes */

/**
 * @class
 * @implements {PersonDetails}
 * See {@link PersonDetails}
 */
export class Person{
  /**
   * @param {PersonDetails} pObj
   * See {@link PersonDetails}
   */
  constructor(pObj){
    this.name = pObj.name
    this.age = pObj.age
  }
  /** @returns {void} */
  sayHi(){
    console.log("Hi")
    console.log(this.name)
  }
}

/**
 * @interface PersonDetails
 * @property {string} name
 * @property {number} age
 */

/**
 * Code from {@link https://jsdoc.app/tags-implements}
 * Interface for classes that represent a color.
 *
 * @interface
 */
function Color() {}

/**
 * Get the color as an array of red, green, and blue values, represented as
 * decimal numbers between 0 and 1.
 *
 * @returns {Array<number>} An array containing the red, green, and blue values,
 * in that order.
 */
Color.prototype.rgb = function() {
    throw new Error('not implemented');
};

/**
 * Class representing a color with transparency information.
 *
 * @class
 * @implements {Color}
 * See {@link Color}
 */
function TransparentColor() {}

// inherits the documentation from `Color#rgb`
TransparentColor.prototype.rgb = function() {
    // ...
};

/**
 * Get the color as an array of red, green, blue, and alpha values, represented
 * as decimal numbers between 0 and 1.
 *
 * @returns {Array<number>} An array containing the red, green, blue, and alpha
 * values, in that order.
 */
TransparentColor.prototype.rgba = function() {
    // ...
};
