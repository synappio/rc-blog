module.exports = function(grunt) {  
    var _banner = '/** \n* Package: <%= pkg.name %> \n* Author: <%= pkg.author %> \n* Build Time: <%= grunt.template.today("yyyy-mm-dd HH:MM:ss") %>  \n*/\n';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: _banner
            },
            build: {
                files: [{
                    cwd: './src/js',
                    expand: true,
                    src: ['*.js'],
                    dest: './assets/js/',
                    ext: '.min.js'
                }]
            }
        }, //close uglify
        csslint: {
            options: {
            }, // close .options
            build: {
                src: ['./src/css/*.css']
            } // close .build
        }, // close csslint
        cssmin: {
            options: {
                banner: _banner,
            }, // close .options
            build: {
                files: [{
                    cwd: './src/css',
                    expand: true,
                    src: ['*.css'],
                    dest: './assets/css/',
                    ext: '.min.css'
                }]
            }, // close .build
        }, // close cssmin
        less: {
            options: {
                banner: _banner
            },
            build: {
                files: [{
                    cwd: './src/less',
                    expand: true,
                    src: ['main.less'],
                    dest: './src/css/',
                    ext: '.css'
                }]
            }, // close .build
        }, // close less
        watch: {
            js: {
                files: './src/js/*.js',
                tasks: ['uglify'],
                options: {
                    interrupt: true,
                },
            },
            css: {
                files: './src/less/*.less',
                tasks: ['less','cssmin'],
                options: {
                    interrupt: true,
                },
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-csslint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    // Default task(s).
    grunt.registerTask('default', ['watch']);
};