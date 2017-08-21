var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");

gulp.task("copy", function() {
    gulp.src(['app/bower_components/**/*'])
        .pipe(gulp.dest("dist/bower_components"));
    gulp.src(["app/img/**/*"])
        .pipe(gulp.dest("dist/img"));
    gulp.src(["app/phones/**/*"])
        .pipe(gulp.dest("dist/phones"));
    gulp.src(["app/phone-detail/*.html"])
        .pipe(gulp.dest("dist/phone-detail"));
    gulp.src(["app/phone-list/*.html"])
        .pipe(gulp.dest("dist/phone-list"));
    gulp.src(["app/*.css", "app/*.html"])
        .pipe(gulp.dest("dist"));
});

gulp.task("build", function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("dist"));
});

gulp.task("default", ["build", "copy"]);