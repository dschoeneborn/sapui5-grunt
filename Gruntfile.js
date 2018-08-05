module.exports = function(grunt) {
	"use strict";
	var dbgSources = ['**/*.js'
    ];
	
	var config = {
		
			dir: {
				appFolder: 'webapp',
				projectRoot: process.cwd(),
				dist: 'dist',
			},
			
			clean: [
				"<%= dir.dist %>"
			],
			copy: {
				copyToDist: {
					files: [
						{
							expand: true,
							src: [
								'**/*',
								'!**/*.css',
								'!**/*.html',
								'!**/*.xml',
								'!**/*.js'
							],
							dest: '<%= dir.dist %>',
							cwd: '<%= dir.appFolder %>',					
						}
					]
				},
				copyDbgToDist: {
					files: [
						{
							expand: true,
							src: '**/*.js',
							dest:'<%= dir.dist %>',
							cwd: '<%= dir.appFolder %>',
							rename: function(dest, src) {
								return dest + '/' + src.replace(/((\.view|\.fragment|\.controller)?\.js)/, '-dbg$1');
							}
						},
						{
							expand: true,
							src: '**/*.css',
							dest: '<%= dir.dist %>',
							cwd: '<%= dir.appFolder %>',
							rename: function(dest, src) {
								return dest + '/' + src.replace('.css', '-dbg.css');
							}
						}
					]
				},
			},
			htmlmin: {
				index: {
					options: {
						collapseWhitespace: true,
						conservativeCollapse: true,
						collapseBooleanAttributes: true,
						removeComments: true
					},
					files: [{
						'<%= dir.dist %>/index.html': '<%= dir.appFolder %>/index.html'
					}]
				}
			},
			xmlmin: {
				files: {
					expand: true,
					cwd: '<%= dir.appFolder %>',
					src: '**/*.xml',
					dest: '<%= dir.dist %>/'
				}
			},
			uglify: {
				my_target: {
					files: [{
						expand: true,
						cwd: '<%= dir.appFolder %>',
						src: '**/*.js',
						dest: '<%= dir.dist %>/'
					}]
				}
			},
			mkdir: {
				dist: {
					options: {
						create: ['<%= dir.dist %>']
					}
				}
			},
			'cssmin': {
				build: {
					files: [
						{
							expand: true,
							src: '**/*.css',
							dest: '<%= dir.dist %>',
							cwd: '<%= dir.appFolder %>'
						}]
				}
			},
			openui5_preload: {
				component: {
					options: {
						resources: {
							cwd: '<%= dir.appFolder %>',
							prefix: 'my/app'
						},
						dest: '<%= dir.dist %>'
					},
					components: 'my/app'
				}
			},
			connect: {
				server: {
					options: {
						port: 8001,
						base: '<%= dir.dist %>', 
						useAvailablePort: true,
						keepalive: true,
						 open: {
							target: 'http://localhost:8001',
							}
						}
					}
				}
		};
	
	
	grunt.config.merge(config);
	
	grunt.loadNpmTasks("grunt-contrib-clean");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-xmlmin');
	grunt.loadNpmTasks("grunt-contrib-htmlmin");
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-mkdir');
	grunt.loadNpmTasks('grunt-openui5');
	grunt.loadNpmTasks('grunt-contrib-connect');
	

	grunt.registerTask('default', [
		"clean",
		"mkdir",
		"copy:copyToDist",
		"copy:copyDbgToDist",
		"xmlmin",
		"uglify",
		'htmlmin:index',
		"cssmin",
		"openui5_preload"
	]);
	
	
	grunt.registerTask('localhost', [
		"clean",
		"mkdir",
		"copy:copyToDist",
		"copy:copyDbgToDist",
		"xmlmin",
		"uglify",
		'htmlmin:index',
		"cssmin",
		"openui5_preload",
		"connect"
	]);
};