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
                inversedObj[resultingValue] = originalObjKey;
                _this._setValueToKey;
            }
        });
        return inversedObj;
    };
    _Flipper.prototype._setValuetoKey = function (inputObj, key, value) {
        inputObj[key] = value;
    };
    return _Flipper;
})();
exports.Flipper = new _Flipper();
