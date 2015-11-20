function inverseObj(originalObj) {

  var inversedObj = {};
  var resultingValue;

  // First, we want to loop through all the keys of our input object.
  Object.keys(originalObj).map(function(originalObjKey, index) {

    resultingValue = originalObj[originalObjKey];

    // For the values of each key, check if it is an array.
    if ( Object.prototype.toString.call( resultingValue ) === '[object Array]' ) {

      // If it is an array, let's loop through the (string) values and set them
      // as keys for the inversed Object.
      resultingValue.map(function(result) {
        inversedObj[result] = originalObjKey;
      });

    // Otherwise, set it directly.
    } else {
      inversedObj[resultingValue] = originalObjKey;
    }
  });

  return inversedObj;
}
