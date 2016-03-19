'use strict';

var fs = require('fs');
var path = require('path');

const STR  =  typeof ''
    , OBJ  =  typeof {}
    , FN   =  typeof function(){}
  ;
  
var is = {

    defined: (x => x!= null)
  , string: (x => typeof x === STR)
  , fn: (x => typeof x === FN)
  , array: (x => Array.isArray(x))
  , object: (x => x != null && typeof x === OBJ)
  , number: (x => x != null && typeof x === typeof 1 && !isNaN(x))
  , bool: (x => x != null && typeof x === typeof true)

  , file: function(file) {
      try {
        return fs.statSync(file).isFile();
      } catch (err) {
        return false;
      }
    }
  , directory: function(file) {
      try {
        return fs.statSync(file).isDirectory();
      } catch (err) {
        return false;
      }
    }
};
 
module.exports = is;