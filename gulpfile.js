var gulp = require('gulp');

gulp.task('build', function () {
	gulp.src('./node_modules/phaser-ce/dist/**/*')
		.pipe(gulp.dest('./dist'));
	gulp.src('./node_modules/phaser-ce/typescript/**/*')
		.pipe(gulp.dest('./typescript'));
});
