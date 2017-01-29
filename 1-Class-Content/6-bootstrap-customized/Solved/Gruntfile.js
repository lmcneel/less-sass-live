module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Read the package configuration
    pkg: grunt.file.readJSON('package.json'),
    // set up a task for grunt
    less:{
      dev: {
        options: {
          sourceMap: true,
          sourceMapFilename: "assets/css/style-less.css.map"
        },
        files: {
          'assets/css/bootstrap.css': 'assets/less/bootstrap.less'
        }
      },
      dist: {
        options: {
          paths: ['assets/less'],
          compress: true
        },
        files: {
          'assets/css/bootstrap.min.css': 'assets/css/bootstrap.less'
        }
      }
    },
    // Set up the watch task
    watch: {
      less: {
        files: 'assets/less/*.less',
        tasks: ['less:dev'],
        options: {
          atBegin: true
        }
      }
    }

  });

  // Load the NPM pacakages necessary
  // Example line for loading NPM tasks
  // grunt.loadNpmTasks('npm-package-name');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Default task(s).
  // The first argument in registerTask is the name of what will be called in CLI to start the task
  // so grunt.registerTask('watch',...); translates to `grunt watch` in command line
  // The second argument in registerTask is an array that refers to tasks set up in the initConfig
  // example and are the commands that will be ran when the task is called in comand line
  //grunt.registerTask('default', );
  grunt.registerTask('default', ['watch:less']);

};
