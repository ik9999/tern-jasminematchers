(function(mod) {
  if (typeof exports == "object" && typeof module == "object") { // CommonJS
    return mod(require("tern/lib/infer"), require("tern/lib/tern"));
  }
  if (typeof define == "function" && define.amd) // AMD
    return define([ "tern/lib/infer", "tern/lib/tern" ], mod);
  mod(tern, tern);
})(function(infer, tern) {
  "use strict";
  
  tern.registerPlugin("jasminematchers", function(server, options) {
    return {
      defs : defs
    };
  });
 
  var defs = {
    "!name": "custom_matchers",
    "!define": {
      "!jasmine": {        
        "customMatcherrr": {	
          "!type": "fn(expected: number)",
           "!doc": "Custom matcher"
        }
      }
    }
  }

});
