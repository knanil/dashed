'use strict';

function params(fn) {
  var FN_ARGS = /^function\s*[^\(]*\(\s*([^\)]*)\)/m;
  var FN_ARG_SPLIT = /,/;
  var FN_ARG = /^\s*(_?)(.+?)\1\s*$/;
  var STRIP_COMMENTS = /((\/\/.*$)|(\/\*[\s\S]*?\*\/))/mg;
  var fnText = fn.toString().replace(STRIP_COMMENTS, '');
  var argDecl = fnText.match(FN_ARGS);
  var args = [];
  argDecl[1].split(FN_ARG_SPLIT).forEach(function(arg){
    arg.replace(FN_ARG, function(all, underscore, name){
      args.push(name);
    });
  });
  return args;
}

module.exports = {
    params: params
};
