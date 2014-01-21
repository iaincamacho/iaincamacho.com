module.exports = function(grunt) {

  grunt.loadNpmTasks('grunt-exec');

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    exec: {
      server: {
        cmd : 'node app/app.js'
      }
    }
  });

  grunt.registerTask('server', ['exec:server']);
  grunt.registerTask('default', ['server']);
};  	