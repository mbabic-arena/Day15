function myObject() {
  "use strict";
  const MATH_CONSTANTS = {
    E: 2.71828,
  };
  // Only change code below this
  Object.freeze(MATH_CONSTANTS);
  // Only change code above this
  try {
    MATH_CONSTANTS.E = 23;
  } catch (error) {
    console.log(error.message);
  }
  return MATH_CONSTANTS.E;
}
const E = myObject();

module.exports = myObject;
