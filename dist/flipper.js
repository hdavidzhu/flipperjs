var _Flipper = (function () {
    function _Flipper() {
    }
    _Flipper.prototype.flip = function (originalObj) {
        var _this = this;
        var inversedObj = {};
        var resultingValue;
        Object.keys(originalObj).map(function (originalObjKey, index) {
            resultingValue = originalObj[originalObjKey];
            if (Object.prototype.toString.call(resultingValue) === '[object Array]') {
                resultingValue.map(function (result) {
                    _this._setValueToKey(inversedObj, result, originalObjKey);
                });
            }
            else {
                _this._setValueToKey(inversedObj, resultingValue, originalObjKey);
            }
        });
        return inversedObj;
    };
    _Flipper.prototype._setValueToKey = function (inputObj, key, value) {
        if (inputObj[key]) {
            if (typeof inputObj[key] === "string") {
                inputObj[key] = [inputObj[key], value];
            }
            else if (Object.prototype.toString.call(inputObj[key]) === '[object Array]') {
                inputObj[key].push(value);
            }
        }
        else {
            inputObj[key] = value;
        }
    };
    return _Flipper;
})();
exports.Flipper = new _Flipper();
