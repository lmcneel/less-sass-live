module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    // Read the package configuration
    pkg: grunt.file.readJSON('package.json'),
    // set up a task for grunt
    sass: {
      dev: {
        options:{
          style: "expanded"
        },
        files: {
          'assets/css/style-sass.css' : 'assets/scss/style-sass.scss'
        }
      },
      dist: {
        options: {
          style: "compressed"
        },
        files: {
          'assets/css/style-sass.min.css' : 'assets/scss/style-sass.scss'
        }
      }
    },
    // set up a task for compass
    compass: {
      dev: {
        options: {
          config: 'config.rb',
          sourceMap: true,
          sassDir: 'assets/scss',
          cssDir: 'assets/',
          specify: ['assets/scss/style-compass.scss'],
          output_style: 'expanded'
        }
      },
      dist: {
        options: {
          config: 'config.rb',
          sassDir: 'assets/scss',
          cssDir: 'assets/',
          specify: ['assets/scss/style-compass.scss'],
          output_style: 'compressed',
          environment: 'production'
        }
      }
    },
    // set up a task for less
    less:{
      dev: {
        options: {
          sourceMap: true,
          sourceMapFilename: "assets/css/style-less.css.map"
        },
        files: {
          'assets/css/style-less.css': 'assets/less/style-less.less'
        }
      },
      dist: {
        options: {
          paths: ['assets/less'],
          compress: true
        },
        files: {
          'assets/css/style-less.min.css': 'assets/css/style-less.less'
        }
      }
    },
    // Set up the watch task
    watch: {
      sass: {
        files: 'assets/scss/*.scss',
        tasks: ['sass:dev'],
        options: {
          atBegin: true
        }
      },
      compass: {
        files: 'assets/scss/*.scss',
        tasks: ['compass:dev'],
        options: {
          atBegin: true
        }
      },
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
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.loadNpmTasks('grunt-contrib-less');

  // Default task(s).
  // The first argument in registerTask is the name of what will be called in CLI to start the task
  // so grunt.registerTask('watch',...); translates to `grunt watch` in command line
  // The second argument in registerTask is an array that refers to tasks set up in the initConfig
  // example and are the commands that will be ran when the task is called in comand line
  //grunt.registerTask('default', );
  grunt.registerTask('default', ['watch:sass']);
  grunt.registerTask('wsass', ['watch:sass']);
  grunt.registerTask('wcompass', ['watch:compass']);
  grunt.registerTask('wless', ['watch:less']);

};
