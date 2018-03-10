var add = require('./add')

const compose = function(){
	var fx = arguments

  return function (result) {
    for (var i = fx.length - 1; i > -1; i--) {
      result = fx[i].call(this, result)
    }
    return result
  }
}

module.exports = compose
