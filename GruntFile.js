module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg}'],
          dest: 'images/'
        }]
      }
    },
    htmlmin: {
      dist: {
        options: {                                 // Target options
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files
          'index.html': 'index.html',
          'project-2048.html': 'project-2048.html',
          'project-mobile.html': 'project-mobile.html',
          'project-webperf.html': 'project-webperf.html' // 'destination': 'source'
        }
      }
    },
    cssmin: {
      minify: {
        options: {
          banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
        },
        expand: true,
        src: ['*.css', '!*.min.css'],
        dest: 'dist/',
        ext: '.min.css'
      }
    },
    jsdoc : {
      dist : {
        src: ['views/js/main.js', 'README.md'],
        options: {
            destination: 'doc',
            configure: 'conf.json'
          }
      }
    },
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-jsdoc');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.registerTask('default', ['htmlmin', 'grunt-jsdoc', 'imagemin', 'cssmin' ]);
  grunt.registerTask('production', ['jsdoc', 'imagemin', 'cssmin' ]);
}