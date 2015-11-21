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
        bread:  'rye',
        jelly:  'lingenberry',
        board:  'mahogony'
      }

      jqFlip = {
        brie:         'cheese',
        rye:          'bread',
        lingenberry:  'jelly',
        mahogony:     'board'
      }
    });

    it("can flip a basic object with a one-to-one link", function() {
      var result = Flipper.flip(jqObject);
      expect(result).to.deep.equal(jqFlip);
    });

    describe("when handling one/multiple matching", function() {

      beforeEach(function() {
        jqObject.kitchen = ['small', 'medium', 'large'];

        jqFlip.small     = 'kitchen';
        jqFlip.medium    = 'kitchen';
        jqFlip.large     = 'kitchen';
      });

      it("can flip a basic object with a one-to-multiple link", function() {
        // Running through our actual code.
        var result = Flipper.flip(jqObject);
        expect(result).to.deep.equal(jqFlip);
      });

      it('can flip a basic object with a multiple-to-one link', function() {

        // Running through our actual code.
        var result = Flipper.flip(jqFlip);
        expect(result).to.deep.equal(jqObject);
      });

      it('can flip a basic ojbect with a multiple-to-multiple link', function() {
        //Setup of our scenario.
        jqObject.cats = ['Fluffy', 'Oscar', 'Jerry'];
        jqObject.dogs = ['Samuel', 'Oscar', 'Fluffy', 'Fish']; 
      
        jqFlip.Fluffy = ['cats', 'dogs'];
        jqFlip.Oscar  = ['cats', 'dogs'];
        jqFlip.Jerry  = 'cats';
        jqFlip.Samuel = 'dogs';
        jqFlip.Fish   = 'dogs';

        //Running through our actual code.
        var result = Flipper.flip(jqObject);
        expect(result).to.deep.equal(jqFlip);
      });
    });
  });
});
