const hard = function (f) {                                                                     
  var len = f.length;                                                                     
                                                                                          
  return function _f() {                                                                  
    var old_args = arguments;                                                             
                                                                                          
    return function() {                                                                   
      var args = [];                                                                      
      for (let i = 0, l = old_args.length;  i < l; i++) args[args.length] = old_args[i];  
      for (let i = 0, l = arguments.length; i < l; i++) args[args.length] = arguments[i]; 
                                                                                          
      return (args.length >= len ? f : _f).apply(this, args);                             
    };                                                                                    
  }();                                                                                    
}      

module.exports = hard