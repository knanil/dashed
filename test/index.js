'use strict';

var expect = require('chai').expect;

describe('Top level tests', function() {
  var _ = require('../src/index');
  it('is api', function(done){
    expect(_.is).to.have.property('defined');
    expect(_.is).to.have.property('string');
    expect(_.is).to.have.property('fn');
    expect(_.is).to.have.property('array');
    expect(_.is).to.have.property('object');
    expect(_.is).to.have.property('number');
    expect(_.is).to.have.property('bool');
    done();
  });
  
  it('reflection api', function(done){
    expect(_.reflection).to.have.property('params');
    done();
  });
  
});

