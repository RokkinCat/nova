var Utils = {
	isString: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object String]";
	},
	
	isEmpty: function(object) {
		if (object == null) {
			return true;
		} else if (isString(object)) {
			return trim(object).length === 0;
		} else if (isArray(object)) {
			return object.length === 0;
		} else if (isObject(object)) {
			for (var key in object) { return false; }
			return true;
		}

		return false;
	},

	trim: (function() {
		if (String.prototype.trim) {
			return function(str) { return String.prototype.trim.call(str); };
		} else
			return function(str) { return str.replace(/^\s+/, '').replace(/\s+$/, ''); };
		}
	})()
};