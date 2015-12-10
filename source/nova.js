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