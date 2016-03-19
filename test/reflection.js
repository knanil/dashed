'use strict';

var expect = require('chai').expect;


describe('reflection api', function() {
  var r = require('../src/reflection');
  function fn() { return false; }
  function fn1(x) { return x; };
  function fn2(x, y) { return x * y; };

  it('params', function(done){
    expect(r.params(fn)).to.eql([]);
    expect(r.params(fn1)).to.eql(['x']);
    expect(r.params(fn2)).to.eql(['x', 'y']);
    
    done();
  });
});