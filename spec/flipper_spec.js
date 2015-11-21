// var flippers = require()

sinon = require("sinon");

var chai = require('chai');
var sinonChai = require("sinon-chai");
var Flipper = require('../dist/flipper').Flipper;

expect = chai.expect;
chai.use(sinonChai);

describe("Flipper", function() {
  describe("flip", function() {

    var jqObject;
    var jqFlip;

    beforeEach(function() {
      jqObject = {
        cheese: 'brie',
        bread: 'rye',
        jelly: 'lingenberry',
        board: 'mahogony'
      }

      jqFlip = {
        brie: 'cheese',
        rye: 'bread',
        lingenberry: 'jelly',
        mahogony: 'board'
      }
    });

    it("can flip a basic object with a one-to-one link", function() {
      var result = Flipper.flip(jqObject);
      expect(result).to.deep.equal(jqFlip);
    });
  });
});