import gulp from "gulp";
import zip from "gulp-zip";

// fs_config = require("./fs-config.json");

// require("gulp-freemius-deploy")(gulp, {
//   developer_id: fs_config.developer_id,
//   plugin_id: fs_config.plugin_id,
//   public_key: fs_config.public_key,
//   secret_key: fs_config.secret_key,
//   zip_name: "pdf-poster.zip",
//   zip_path: "zip/",
//   add_contributor: false,
// });

export function bundle() {
  return gulp
    .src(
      [
        "**/*",
        "!node_modules/**",
        "!zip/**",
        "!bundled/**",
        "!pdf.js/**",
        "!gulpfile.mjs",
        "!todo.txt",
        "!package.json",
        "!composer.lock",
        "!readme.md",
        "!process.json",
        "!package-lock.json",
        "!webpack.config.js",
        "!.gitignore",
      ]
      // { allowEmpty: true }
    )
    .pipe(zip("advanced-3d-model-viewer.zip"))
    .pipe(gulp.dest("bundled"));
}

// export { bundle };

// export const plugin_zip = () => {
//   return gulp.src(["bundled/**"]).pipe(zip("advanced-3d-model-viewer.zip")).pipe(gulp.dest("zip"));
// };
