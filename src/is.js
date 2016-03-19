'use strict';

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

};
  
module.exports = is;