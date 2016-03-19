'use strict';

var expect = require('chai').expect;


describe('is api', function() {
  var is = require('../src/is');
  let undefined1
    , null1 = null
    , false1 =  false
    , true1 = true
    , num0 = 0
    , num1 = 1
    , arr1 = []
    , arr2 = [1,2,3]
    , fn1 = function(){}
    , fn2 = (x=>x)
    , obj1 = {}
    , obj2 = {a: 'a'}
    , obj3 = {'0': 0, '1': 1, length: function() {return 2;}}
    , obj4 = new Object()
    , str1 = ''
    , str2 = 'A'
  ;  

  it('defined', function(done){
    expect(is).to.have.property('defined');
    expect(is.defined()).to.equal(false);
    expect(is.defined(undefined1)).to.equal(false);
    expect(is.defined(null1)).to.equal(false);

    expect(is.defined(false1)).to.equal(true);
    expect(is.defined(true1)).to.equal(true);
    expect(is.defined(num0)).to.equal(true);
    expect(is.defined(num1)).to.equal(true);
    expect(is.defined(arr1)).to.equal(true);
    expect(is.defined(arr2)).to.equal(true);
    expect(is.defined(fn1)).to.equal(true);
    expect(is.defined(fn2)).to.equal(true);
    expect(is.defined(obj1)).to.equal(true);
    expect(is.defined(obj2)).to.equal(true);
    expect(is.defined(obj3)).to.equal(true);
    expect(is.defined(obj4)).to.equal(true);
    expect(is.defined(str1)).to.equal(true);
    expect(is.defined(str2)).to.equal(true);
    
    done();
  });
  
  it('string', function(done){
    expect(is).to.have.property('string');
    expect(is.string()).to.equal(false);
    expect(is.string(undefined1)).to.equal(false);
    expect(is.string(null1)).to.equal(false);
    expect(is.string(false1)).to.equal(false);
    expect(is.string(true1)).to.equal(false);
    expect(is.string(num0)).to.equal(false);
    expect(is.string(num1)).to.equal(false);
    expect(is.string(arr1)).to.equal(false);
    expect(is.string(arr2)).to.equal(false);
    expect(is.string(fn1)).to.equal(false);
    expect(is.string(fn2)).to.equal(false);
    expect(is.string(obj1)).to.equal(false);
    expect(is.string(obj2)).to.equal(false);
    expect(is.string(obj3)).to.equal(false);
    expect(is.string(obj4)).to.equal(false);
    
    expect(is.string(str1)).to.equal(true);
    expect(is.string(str2)).to.equal(true);

    done();
  });
  
  it('function', function(done){
    expect(is).to.have.property('fn');
    expect(is.fn()).to.equal(false);
    expect(is.fn(undefined1)).to.equal(false);
    expect(is.fn(null1)).to.equal(false);
    expect(is.fn(false1)).to.equal(false);
    expect(is.fn(true1)).to.equal(false);
    expect(is.fn(num0)).to.equal(false);
    expect(is.fn(num1)).to.equal(false);
    expect(is.fn(arr1)).to.equal(false);
    expect(is.fn(arr2)).to.equal(false);
    
    expect(is.fn(fn1)).to.equal(true);
    expect(is.fn(fn2)).to.equal(true);
    
    expect(is.fn(obj1)).to.equal(false);
    expect(is.fn(obj2)).to.equal(false);
    expect(is.fn(obj3)).to.equal(false);
    expect(is.fn(obj4)).to.equal(false);
    expect(is.fn(str1)).to.equal(false);
    expect(is.fn(str2)).to.equal(false);

    done();
  });
  
  it('array', function(done){
    expect(is).to.have.property('array');
    expect(is.array()).to.equal(false);
    expect(is.array(undefined1)).to.equal(false);
    expect(is.array(null1)).to.equal(false);
    expect(is.array(false1)).to.equal(false);
    expect(is.array(true1)).to.equal(false);
    expect(is.array(num0)).to.equal(false);
    expect(is.array(num1)).to.equal(false);
    
    expect(is.array(arr1)).to.equal(true);
    expect(is.array(arr2)).to.equal(true);
    
    expect(is.array(fn1)).to.equal(false);
    expect(is.array(fn2)).to.equal(false);
    expect(is.array(obj1)).to.equal(false);
    expect(is.array(obj2)).to.equal(false);
    expect(is.array(obj3)).to.equal(false);
    expect(is.array(obj4)).to.equal(false);
    expect(is.array(str1)).to.equal(false);
    expect(is.array(str2)).to.equal(false);

    done();
  });

  it('object', function(done){
    expect(is).to.have.property('object');
    expect(is.object()).to.equal(false);
    expect(is.object(undefined1)).to.equal(false);
    expect(is.object(null1)).to.equal(false);
    expect(is.object(false1)).to.equal(false);
    expect(is.object(true1)).to.equal(false);
    expect(is.object(num0)).to.equal(false);
    expect(is.object(num1)).to.equal(false);
    
    expect(is.object(arr1)).to.equal(true);
    expect(is.object(arr2)).to.equal(true);

    expect(is.object(fn1)).to.equal(false);
    expect(is.object(fn2)).to.equal(false);
    
    expect(is.object(obj1)).to.equal(true);
    expect(is.object(obj2)).to.equal(true);
    expect(is.object(obj3)).to.equal(true);
    expect(is.object(obj4)).to.equal(true);

    expect(is.array(str1)).to.equal(false);
    expect(is.array(str2)).to.equal(false);
    
    done();
  });

  it('number', function(done){
    expect(is).to.have.property('number');
    expect(is.number()).to.equal(false);
    expect(is.number(undefined1)).to.equal(false);
    expect(is.number(null1)).to.equal(false);
    expect(is.number(false1)).to.equal(false);
    expect(is.number(true1)).to.equal(false);

    expect(is.number(num0)).to.equal(true);
    expect(is.number(num1)).to.equal(true);
    
    expect(is.number(arr1)).to.equal(false);
    expect(is.number(arr2)).to.equal(false);
    expect(is.number(fn1)).to.equal(false);
    expect(is.number(fn2)).to.equal(false);
    expect(is.number(obj1)).to.equal(false);
    expect(is.number(obj2)).to.equal(false);
    expect(is.number(obj3)).to.equal(false);
    expect(is.number(obj4)).to.equal(false);
    expect(is.number(str1)).to.equal(false);
    expect(is.number(str2)).to.equal(false);
    
    done();
  });

  it('bool', function(done){
    expect(is).to.have.property('bool');
    expect(is.bool()).to.equal(false);
    expect(is.bool(undefined1)).to.equal(false);
    expect(is.bool(null1)).to.equal(false);
    
    expect(is.bool(false1)).to.equal(true);
    expect(is.bool(true1)).to.equal(true);

    expect(is.bool(num0)).to.equal(false);
    expect(is.bool(num1)).to.equal(false);
    expect(is.bool(arr1)).to.equal(false);
    expect(is.bool(arr2)).to.equal(false);
    expect(is.bool(fn1)).to.equal(false);
    expect(is.bool(fn2)).to.equal(false);
    expect(is.bool(obj1)).to.equal(false);
    expect(is.bool(obj2)).to.equal(false);
    expect(is.bool(obj3)).to.equal(false);
    expect(is.bool(obj4)).to.equal(false);
    expect(is.bool(str1)).to.equal(false);
    expect(is.bool(str2)).to.equal(false);
    
    done();
  });

});

