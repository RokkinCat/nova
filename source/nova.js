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

			currentApplication = applications[name]

			return this;
		},

		model: function(name) {
			return this;
		},

		collection: function(name) {
			return this;
		},

		view: function(name) {
			return this;
		},

		component: function(name) {
			return this;
		},

		imports: function(name) {
			return this;
		},

		definition: function(baseClassName, generator) {
			return this;
		};
	};
}; )() );