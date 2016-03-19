'use strict';

var expect = require('chai').expect;

describe('Top level tests', function() {
  it('is api', function(done){
    var is = require('../src/is');
    expect(is).to.have.property('defined');
    expect(is).to.have.property('string');
    expect(is).to.have.property('fn');
    expect(is).to.have.property('array');
    expect(is).to.have.property('object');
    expect(is).to.have.property('number');
    expect(is).to.have.property('bool');
    done();
  });
});

