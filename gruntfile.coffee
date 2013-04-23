module.exports = (grunt) ->
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'
  grunt.loadNpmTasks 'grunt-contrib-jshint'
  grunt.loadNpmTasks 'grunt-contrib-copy'
  grunt.loadNpmTasks 'grunt-contrib-concat'
  grunt.loadNpmTasks 'grunt-contrib-uglify'
  grunt.loadNpmTasks 'grunt-karma'
  grunt.loadNpmTasks 'grunt-recess'
  grunt.loadNpmTasks 'grunt-express'
  
  grunt.initConfig 
    pkg: grunt.file.readJSON('package.json')
    
    jshint:
      build: 
        options: 
          jshintrc: '.jshintrc'
        src: ['app/js/**/*.js']

    coffee:
      compile:
        options:
          bare: true
        files: [
          expand:true
          cwd: 'coffee/'
          src: ['**/*.coffee']
          dest: 'app/js'
          ext: '.js'	
          ]
          
    watch:
      files: 'coffee/**'
      tasks: ['coffee:compile']
      
    express: 
      start:
        options: 
          port: 8000,
          bases: [
            'app'
            'test'
            ]  
    
    copy:
      main:
        files:[
          { 
            expand:true
            cwd : 'components/angular/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}
          {
            expand:true
            cwd : 'components/angular-cookies/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}  
          {
            expand:true
            cwd : 'components/angular-loader/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}
          {
            expand:true
            cwd : 'components/angular-resource/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}    
            {
            expand:true
            cwd : 'components/angular-sanitize/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}
            {
            expand:true
            cwd : 'components/angular-sanitize/'
            src:[
              '*.js']
            dest:'app/lib/angular'
            filter:'isFile'}
            {
            expand:true
            cwd : 'components/angular-scenario/'
            src:[
              'angular*.js']
            dest:'test/lib/angular'
            filter:'isFile'}
            {
            expand:true
            cwd : 'components/angular-mocks/'
            src:[
              '*.js']
            dest:'test/lib/angular'
            filter:'isFile'}
        ]

    recess:
      dist:
        options: 
          compile : true
        files: 
          'app/css/bootstrap.css': ['components/bootstrap/less/bootstrap.less']
          'app/css/bootstrap-responsive.css': ['components/bootstrap/less/responsive.less']

      distmin:
        options: 
          compile : true
          compress: true
        files: 
          'app/css/bootstrap.min.css': ['components/bootstrap/less/bootstrap.less']
          'app/css/bootstrap-responsive.min.css': ['components/bootstrap/less/responsive.less']
          
    concat:
      boot:
        options:
          stripBanners: true
        files:
              'app/lib/bootstrap/bootstrap.js':[
                'components/bootstrap/js/bootstrap-transition.js' 
                'components/bootstrap/js/bootstrap-alert.js' 
                'components/bootstrap/js/bootstrap-button.js'
                'components/bootstrap/js/bootstrap-carousel.js'
                'components/bootstrap/js/bootstrap-collapse.js' 
                'components/bootstrap/js/bootstrap-dropdown.js' 
                'components/bootstrap/js/bootstrap-modal.js' 
                'components/bootstrap/js/bootstrap-tooltip.js' 
                'components/bootstrap/js/bootstrap-popover.js' 
                'components/bootstrap/js/bootstrap-scrollspy.js' 
                'components/bootstrap/js/bootstrap-tab.js' 
                'components/bootstrap/js/bootstrap-typeahead.js' 
                'components/bootstrap/js/bootstrap-affix.js'
              ]   
          
    uglify:
       target:
         options:
           banner:"/**\n* Bootstrap.js v2.3.1 by @fat & @mdo\n* Copyright 2012 Twitter, Inc.\n* http://www.apache.org/licenses/LICENSE-2.0.txt\n*/"
         files:
           'app/lib/bootstrap/bootstrap.min.js':['app/lib/bootstrap/bootstrap.js']
    
    karma: 
      options: 
        'runner-port': 9999
        browsers: ['Chrome']
      single:
        configFile: 'karma.conf.js'
        singleRun: true
      dev:
        configFile: 'karma.conf.js'
        autoWatch: true    

                      
  grunt.registerTask 'compile', ['coffee:compile','jshint']
  grunt.registerTask 'server', ['express','express-keepalive']	
  grunt.registerTask 'bootstrap', ['recess' , 'concat' , 'uglify'] 
  grunt.registerTask 'install' , ['bootstrap','copy']
  grunt.registerTask 'default' , ['install']
  grunt.registerTask 'test' ,['karma:dev']
  grunt.registerTask 'test:single' ,['karma:single']