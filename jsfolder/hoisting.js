console.log(x === undefined); // true
var x = 3;

(function () {
   // undefined
  var x = "local value";
  console.log(x);
})();