'use strict';

const gulp = require('gulp');
const tslint = require('gulp-tslint');
const stylint = require('gulp-stylint');
const execSync = require('child_process').execSync;

const PRE_COMMIT = process.env.NODE_ENV === 'pre_commit';

let changedFiles;
let changedFilesTypescript;
let changedFilesStylus;

if (PRE_COMMIT) {
    changedFiles = execSync('git diff --cached --name-only --diff-filter=ACM', {encoding: 'utf8'});
    changedFiles = changedFiles.split('\n');
    changedFilesTypescript = changedFiles.filter((item) => /^src\/.+?\.tsx?$/.test(item));
    changedFilesStylus = changedFiles.filter((item) => /^src\/.+?\.styl$/.test(item));
}

/**
 *
 * @desc Check TypeScript validation
 */
gulp.task('tslint', ()=>
    gulp.src(PRE_COMMIT ? changedFilesTypescript : ['src/**/*.{ts,tsx}'])
        .pipe(tslint({
            formatter: 'verbose'
        }))
        .pipe(tslint.report())
);

/**
 *
 * @desc Check stylus validation
 */
gulp.task('styluslint', ()=>
    gulp.src(PRE_COMMIT ? changedFilesStylus : ['src/css/*.styl'])
        .pipe(stylint())
        .pipe(stylint.reporter())
);

/**
*
* @desc validation Stylus and TypeScript
*/
gulp.task('lint', ['tslint', 'styluslint']);
