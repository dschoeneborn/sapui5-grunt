# sapui5-grunt
Gruntfile.js and npm package.json für SAPUI5 Projects.  
The application files must be in the webapp folder. However, the name and path can be changed in the Gruntfile.js.

# Installation
Install Node.js to get npm.  
https://nodejs.org/en/

Install grunt:
``` shell
npm install -g grunt-cli
```

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
