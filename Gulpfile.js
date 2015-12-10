var gulp        = require('gulp'),
    plugins     = require('gulp-load-plugins')(),
    chalk       = require('chalk'),
    gutil       = require('gulp-util'),
    cfg         = require('./config');

var cfg = {
	version: "0.0.1",
	version_pattern: "{{VERSION}}",
	build_dir: 'build',
	seperator: "\n;\n",

	source_files: [
		"./source/utils.js",
		"./source/nova.object.js",
		"./source/nova.*.js",
		"./source/nova.js"
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
	gulp.src(cfg.build_dir, {read: false})
	    .pipe(plugins.rimraf({force: true}));
});

gulp.task('compile', function() {
	gulp.src(cfg.source_files)
	    .pipe(plugins.replace(cfg.version_pattern, cfg.version)
	    .pipe(plugins.concat(output_filename, {newLine: cfg.seperator}))
	    .pipe(gulp.dest(output.dir));
});

gulp.task('watch', function() {
	gulp.watch(paths.input, ['compile']).on('change', cfg.showChange);
});

gulp.task('default', ['clean', 'compile', 'watch']);