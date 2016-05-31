module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: 'src/js/perfmatters.js',
                dest: 'dist/js/perfmatters.js'
            }
        },
        cssmin: {
            build: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: '*.css',
                    dest: 'dist/css'
                }]
            }
        },
        htmlmin: {
            build: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true,
                    minifyCSS: true,
                    minifyJS: true
                },
                files: {
                    'dist/index.html': 'src/index.html',
                    'dist/project-2048.html': 'src/project-2048.html',
                    'dist/project-mobile': 'src/project-mobile.html',
                    'dist/project-webperf.html': 'src/project-webperf.html'
                }
            }
        },
        //Task to copy css files over into dist
        copy: {
            build: {
                files: [{
                    expand: true,
                    src: ['src/css/*'],
                    dest: 'dist/css/',
                    filter: 'isFile'
                }]
            }
        },
        //Task to clean/delete folders/files if they exists
        clean: {
            dev: {
                src: ['dist']
            }
        },
        //Task to create folder if it doesn't exist
        mkdir: {
            dev: {
                options: {
                    create: ['dist']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-mkdir');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-htmlmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['clean','mkdir','uglify', 'cssmin', 'htmlmin']);
};
