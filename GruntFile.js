module.exports = function(grunt){
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
        files: [{
          expand: true,
          cwd: 'img/',
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
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.registerTask('default', ['htmlmin']);
  // grunt.registerTask('default', ['imagemin']);
}