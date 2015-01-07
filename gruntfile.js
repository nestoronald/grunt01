module.exports = function(grunt){
    // configuracion de proyecto
    grunt.initConfig({
        jshint:{
            all:['script1.js']
        },
        concat:{
            dist:{
                src:['script.js','script1.js','script2.js'],
                dest:'unidos.js'
            }
        }
    });
    //cargar el plugin que ofrece la tarea jshint
    grunt.loadNpmTasks('grunt-contrib-jshint');
    //tarea por defecto
    grunt.registerTask('default', ['jshint']);
}