var gulp = require('gulp');
var sass = require('gulp-sass');
var del = require('del');

gulp.task('scss', function() {
    return gulp.src('./source/_patterns/_patterns-global/scss/style.scss')
        .pipe(sass())
        .pipe(gulp.dest('./source/css/')) 
});

gulp.task('clean', function() {
    return del('./source/css/style.css');
})

gulp.task('watch', function(){
    return gulp.watch('./source/**/*.scss', gulp.series(['clean', 'scss']));
});

gulp.task('default', gulp.series('watch'));
