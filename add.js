const add = function(x) {
	return function(y){
		return x + y
	}
}

module.exports = add
