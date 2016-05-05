import gulp from 'gulp';
import less from 'gulp-less';
import path from 'path';

gulp.task('default', ['watch']);

gulp.task('styles', () => {
  return gulp.src('./src/less/styles.less')
    .pipe(less({
		paths: [ path.join(__dirname, 'less') ]
    }))
    .pipe(gulp.dest('./build/css'));
});

gulp.task('watch', () => {
	gulp.watch('./src/less/**/*.less', ['styles']);
});