// Only change code below this
let myName;
let message;
// Only change code above this

myName = "Padawans";
function myMsg(name) {
  "use strict";
  message = "Hello, " + name + "!";
  return message;
}
console.log(myMsg(myName));
module.exports = myMsg;
