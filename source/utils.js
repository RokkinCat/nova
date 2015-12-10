var Utils = {
	// CHECKING RELATED METHODS
	isString: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object String]";
	},

	isFunction: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object Function]";
	},

	isBoolean: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object Boolean]";
	},

	isArray: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object Array]";
	},

	isNumber: function(object) {
		return (typeof object !== "undefined" && object !== null) &&
		       Object.prototype.toString.call(object) === "[object Number]";
	},

	isNaN: function(object) {
		return (Utils.isNumber(object) && object !== object);
	},

	isNull: function(object) {
		return (object === null);
	},

	isUndefined: function(object) {
		return (typeof object === "undefined");
	},
	
	isEmpty: function(object) {
		if (Utils.isNull(object) || Utils.isUndefined(object)) {
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

	// STRING RELATED METHODS
	trim: (function() {
		if (String.prototype.trim) {
			return function(str) { return String.prototype.trim.call(str); };
		} else {
			return function(str) { return str.replace(/^\s+/, '').replace(/\s+$/, ''); };
		}
	})()
};