# sapui5-grunt
Gruntfile.js and npm package.json für SAPUI5 Projects.  
The application files must be in the webapp folder. However, the name and path can be changed in the Gruntfile.js.

# Installation
1. Install Node.js to get npm.  
https://nodejs.org/en/

2. Install grunt:
``` shell
npm install -g grunt-cli
```

3. Navigate to your project folder and install npm dependencies.
``` shell
npm install
```

4. Now you can run the sample project through the tasks using the grunt commands below.

## Default Tasks
* Creates /dist folder
* Creates -dbg files
* Creates Component-preload.js
* Minify controllers
* Minify views
* Minify css

```
grunt
```

## localhost Tasks
* Creates /dist folder
* Creates -dbg files
* Creates Component-preload.js
* Minify controllers
* Minify views
* Minify css
* Start local web server
* Show webapp in default browser

```
grunt localhost
```
