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
        inversedObj[resultingValue] = originalObjKey;
        this._setValueToKey
      }
    });

    return inversedObj;

    }

  private _setValuetoKey(inputObj : any, key : string, value : string) {
    inputObj[key] = value;
  }
}

export var Flipper = new _Flipper();
