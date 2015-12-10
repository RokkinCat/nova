var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    chalk       = require('chalk'),
    gutil       = require('gulp-util');

var cfg = {
	version: "0.0.1",
	version_pattern: "{{VERSION}}",
	build_dir: 'build',
	seperator: "\n",

	source_files: [
		"./source/utils.js",
		"./source/nova.object.js",
		"./source/nova.*.js",
		"./source/nova.js"
		"./source/exports.js"
	],

	output_filename: "nova.js",
	output_min_filename: "nova.min.js",

	showError: function(err) {
		console.log(chalk.red('--------------------------------------------'));
		console.log(chalk.red.bold(err));
		gutil.log('\u0007');
		console.log(chalk.red('--------------------------------------------'));
		this.emit('end');
	},

	showChange: function(info) {
		console.log(chalk.green("File " + info.path + " " + info.type + "!"));
	}
};

gulp.task('clean', function() {
	gulp.src(cfg.build_dir + "/**", {read: false})
	    .pipe(plugins.rimraf({force: true}));
});

gulp.task('compile', function() {
	gulp.src(cfg.source_files)
	    .pipe(plugins.replace(cfg.version_pattern, cfg.version))
	    .pipe(plugins.jshint())
	    .pipe(plugins.concat(cfg.output_filename, {newLine: cfg.seperator}))
	    .pipe(plugins.jshint.reporter('default'))
	    .pipe(plugins.wrap("(function(exports){\r\n<%= contents %>\r\n})(this);"))
	    .pipe(gulp.dest(cfg.build_dir))
	    .pipe(plugins.uglify())
	    .pipe(plugins.rename(cfg.output_min_filename))
	    .pipe(gulp.dest(cfg.build_dir));
});

gulp.task('watch', function() {
	gulp.watch(cfg.source_files, ['compile']).on('change', cfg.showChange);
});

gulp.task('default', ['compile', 'watch']);