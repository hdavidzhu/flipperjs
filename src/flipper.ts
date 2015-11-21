class _Flipper {

  constructor() {}

  public flip(originalObj : any) : any {
    var inversedObj : any = {};
    var resultingValue : any;

    // First, we want to loop through all the keys of our input object.
    Object.keys(originalObj).map((originalObjKey, index) => {

      resultingValue = originalObj[originalObjKey];

      // For the values of each key, check if it is an array.
      if ( Object.prototype.toString.call( resultingValue ) === '[object Array]' ) {

        // If it is an array, let's loop through the (string) values and set them
        // as keys for the inversed Object.
        resultingValue.map((result : string) => {
          this._setValueToKey(inversedObj, result, originalObjKey);
        });

      // Otherwise, set it directly.
      } else {
        this._setValueToKey(inversedObj, resultingValue, originalObjKey);
      }
    });

    return inversedObj;
  }

  private _setValueToKey(inputObj : any, key : string, value : string) {
    
    // First, see if the value of the key has already been set.
    if (inputObj[key]) {
      
      // If the value is a string, change it into an array and add the new value element.
      if (typeof inputObj[key] === "string") {
        inputObj[key] = [inputObj[key], value];
      }
      
      // If the value is already an aray, let's just push onto it. 
      else if (Object.prototype.toString.call( inputObj[key] ) === '[object Array]') {
        inputObj[key].push(value);
      }
    }
    
    // Otherwise, if this is a new unset value, let's just set the key to the value.
    else {
      inputObj[key] = value;
    }
  }
}

export var Flipper = new _Flipper();
