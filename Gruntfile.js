module.exports = function(grunt) {

    //require('load-grunt-tasks')(grunt); // npm install --save-dev load-grunt-tasks 

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: { // Target options 
                style: 'nested',
                sourcemap: 'none'
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '_production/sass/',
                    src: ['*.scss'],
                    dest: '_production/sass/css/',
                    ext: '.css'
                }]
            }
        },
        postcss: {
            options: {
                processors: [
                    //require('autoprefixer-core')({browsers: ['last 20 versions', 'ie 8', 'ie 9', 'ie 10']}),
                    require('autoprefixer')({ browsers: ['last 2 versions', 'ie 8', 'ie 9', 'ie 10'] }),
                ]
            },
            dist: {
                expand: true,
                cwd: '_production/sass/css/',
                src: ['*.css'],
                dest: '_production/sass/css/build/',
                ext: '.min.css'
            }
        },
        cssmin: {
            options: {
                shorthandCompacting: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'style.css': ['_production/vendor/css/normalize.css','_production/vendor/css/flexboxgrid.min.css','_production/sass/css/build/*.css'] // can merge multiple css files. ex: ['foo.css', 'bar.css']
                }
            }
        },
        /*
        concat: {
            options: {
                separator: "\n", //add a new line after each file
                banner: "(function($){", //added before everything
                footer: "})(jQuery);" //added after everything
            },
            js: {
                src: [
                    '_production/vendor/js/plugins.js', // get the plugins first
                    '_production/modules/*.js', // then grab all other js files (will be concatanated at end of file, below plugins)
                    //'!js/lib/main.js' // this is how you'd exclude a file / files
                ],
                dest: 'js/production.js',
            },
        },
        */
        concat: {
            plugins: {
                options: {
                    separator: "\n", //add a new line after each file
                },
                src: [
                    '_production/vendor/js/plugins/jquery.ui.widget.js',
                    '_production/vendor/js/plugins/jquery.iframe-transport.js',
                    '_production/vendor/js/plugins/jquery.fileupload.js',
                    '_production/vendor/js/plugins/jquery.formatter.min.js',
                    '_production/vendor/js/plugins/jquery.waypoints.min.js',
                    '_production/vendor/js/plugins/url.min.js',
                    //'_production/vendor/js/plugins/jquery.history.js',
                    //'_production/vendor/js/plugins/inview.min.js',
                    //'_production/vendor/js/plugins/jquery.validate.min.js', 
                    //'_production/vendor/js/plugins/jquery.fileupload-process.js', 
                    //'_production/vendor/js/plugins/jquery.fileupload-validate.js', 
                    //'!js/lib/main.js' // this is how you'd exclude a file / files
                ],
                dest: '_production/build/plugins.js',
            },
            scripts: {
                options: {
                    separator: "\n", //add a new line after each file
                    banner: "(function($){", //added before everything
                    footer: "})(jQuery);" //added after everything
                },
                src: [
                    '_production/modules/*.js', // then grab all other js files (will be concatanated at end of file, below plugins)
                    '_production/modules/modals/*.js',
                ],
                dest: '_production/build/scripts.js',
            },
            mergeall: {
                src: [
                    '_production/build/plugins.js',
                    '_production/build/scripts.js',
                ],
                dest: 'js/production.js',
            }
        },
        uglify: {
            build: {
                src: 'js/production.js', // now take concatanated javascript file...
                dest: 'js/production.min.js' // ...and minify it
            },
        },
        modernizr: {
            dist: {
                devFile: '_production/vendor/js/modernizr-custom.js',
                //outputFile: 'js/build/custom-modernizr.js',
                dest: 'js/vendor/custom-modernizr.js',
                files: {
                    src: [
                        'js/production.min.js',
                        'style.css',
                        '_production/vendor/css/flexboxgrid.min.css'
                    ]
                },
                "crawl": true,
                "tests": [
                    "touchevents",
                    "cssanimations",
                    "flexbox",
                    "flexboxlegacy",
                    "cssremunit",
                    "csstransforms",
                    "csstransforms3d",
                    "preserve3d",
                    "cssvhunit",
                    "cssvwunit",
                    "sizes",
                    "srcset",
                    "svgclippaths",
                    "svgfilters",
                    "inlinesvg"
                ],
                classPrefix: "has-",
                "options": [
                    "html5shiv",
                    "setClasses"
                ],
                "uglify": true
            }

        },

        svgmin: {
            options: {
                plugins: [
                    { removeXMLProcInst: false },
                    { removeViewBox: false }, 
                    { removeUselessStrokeAndFill: false }
                ]
            },
            dist: {
                expand: true,
                cwd: '_production/svgs',
                src: ['*.svg'],
                dest: '_production/svgs/compressed',
                ext: '.svg'
            }
        },

        grunticon: {
            icons: {
                files: [{
                    expand: true,
                    cwd: "_production/svgs/compressed",
                    src: ["*.svg"],
                    dest: "img/"
                }],
                options: {
                    enhanceSVG: true
                }
            }
        },
        watch: {
            options: {
                livereload: true,
                debounceDelay: 250,
            },
            sass: {
                files: ['_production/sass/*.scss'],
                tasks: ['cssStuff'],
            },
            grunticon: {
                files: ['_production/svgs/*.svg'],
                tasks: ['icons'],
                options: {
                    spawn: false,
                    livereload: true,
                },
            },
            scripts: {
                files: ['_production/modules/*.js', '_production/modules/modals/*.js'],
                tasks: ['jsStuff'],
            },
            html: {
                files: ['*.html', '*.php'],
                options: {
                    livereload: true,
                }
            },
            includes: {
                files:['inc/*.php'],
                tasks:['jsStuff'],
            }
        },
        clean: {
            build: {
                src: ['_production/sass/css','_production/svgs/compressed'] //
            },
        },
        jshint: {
            options: {
                reporter: require('jshint-stylish')
            },
            target: ['_production/modules/*.js']
        }
    });

    // Load the plugins
    //require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-svgmin');
    grunt.loadNpmTasks('grunt-grunticon');
    grunt.loadNpmTasks("grunt-modernizr");
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass', 'postcss', 'cssmin', 'concat', 'uglify', 'clean', 'jshint']); // order matters here!
    grunt.registerTask('icons', ['svgmin', 'grunticon', 'clean']); // order matters here!
    //grunt.registerTask('icons', ['grunticon']);
    grunt.registerTask('dist', ['modernizr']); // order matters here!
    grunt.registerTask('scss', ['sass']);
    grunt.registerTask('cssStuff', ['sass', 'postcss', 'cssmin', 'clean']);
    grunt.registerTask('jsStuff', ['concat', 'uglify', 'clean', 'jshint']);


};
