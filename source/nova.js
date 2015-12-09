var Nova = NovaObject.extend( (function() {
	var applications = {},
	    currentApplication = null,
	    currentObject = null;

	return {
		application: function(name) {
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