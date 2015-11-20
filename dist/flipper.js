var _Flipper = (function () {
    function _Flipper() {
    }
    _Flipper.prototype.flip = function (originalObj) {
        var inversedObj = {};
        var resultingValue;
        Object.keys(originalObj).map(function (originalObjKey, index) {
            resultingValue = originalObj[originalObjKey];
            if (Object.prototype.toString.call(resultingValue) === '[object Array]') {
                resultingValue.map(function (result) {
                    inversedObj[result] = originalObjKey;
                });
            }
            else {
                inversedObj[resultingValue] = originalObjKey;
            }
        });
        return inversedObj;
    };
    return _Flipper;
})();
exports.Flipper = new _Flipper();
