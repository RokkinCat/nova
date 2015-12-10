(function(exports){
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
var NovaObject = function() {
	
};

NovaObject.extend = function(definition) {

};

NovaObject.prototype = {

};
var NovaApplication = NovaObject.extend({

});
var NovaCollection = NovaObject.extend({
	
});
var NovaComponent = NovaObject.extend({
	
});
var NovaModel = NovaObject.extend({
	
});
var NovaView = NovaObject.extend({
	
});
var Nova = NovaObject.extend( (function() {
	var applications = {},
	    currentApplication = null,
	    currentObject = null;

	return {
		application: function(name) {
			if(!Utils.isString(name)) {
				throw new Error("application name must be a String");
			}

			name = Utils.trim(name);

			if(Utils.isEmpty(name)) {
				throw new Error("application name must not be empty");
			}

			if(!applications[name]) {
				applications[name] = new NovaApplication(name);
			}

			currentApplication = applications[name];

			return this;
		},

		model: function(name) {
			if(Utils.isNull(currentApplication)) {
				throw new Error("An appication must be specified in order to define a model");
			}

			return this;
		},

		collection: function(name) {
			if(Utils.isNull(currentApplication)) {
				throw new Error("An appication must be specified in order to define a collection");
			}

			return this;
		},

		view: function(name) {
			if(Utils.isNull(currentApplication)) {
				throw new Error("An appication must be specified in order to define a view");
			}

			return this;
		},

		component: function(name) {
			if(Utils.isNull(currentApplication)) {
				throw new Error("An appication must be specified in order to define a component");
			}

			return this;
		},

		imports: function(name) {
			return this;
		},

		definition: function(baseClassName, generator) {
			if(Utils.isUndefined(generator)) {
				generator = baseClassName;
				baseClassName = undefined;
			}

			if(!Utils.isFunction(generator)) {
				throw new Error("definition generator must be a function");
			}

			return this;
		}
	};
})());
})(this);