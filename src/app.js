/** @module stuff/app */

/** This is a description of the foo function. */
export function foo(){
  console.log("Hello world")
}

/**
 * This adds two numbers together. Try it out!
 * @param {number} a - The first number
 * @param {number} b - The second number
 */ 
export function add(a, b){
  return a + b
}

foo()
add(1, 2)

/** 
 * The best number
 * @type {number} 
 */
const num = 14
