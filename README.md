# less-sass-live

Less Sass Files for Live Zoom meeting

## Pre-setup

1. Make sure you have the following installs working on your computer
  - Make sure you have [Node](https://nodejs.org/en/) installed
    - In terminal or bash, run `node --version`
  - Make sure you have Ruby installed
    - [RubyInstaller for Windows](https://www.ruby-lang.org/en/documentation/installation/#rubyinstaller)
    - MacOSx should have Ruby Pre-installed
    - In terminal or bash, run `ruby --version`
  - Install compass - These may need to be ran with `sudo` if you run into install issues
    ```
    $ gem update --system
    $ gem install sass
    $ gem install compass
    ```
  - To test the installs
    `sass --version`
    `compass --version`
2. Unzip the folder provided. In it are two project folders
  - A non-bootstrap portfolio that we will convert to using SASS and LESS
  - A boostrap portfolio that we will customize bootstrap with
  - You can use the portfolios you built in week 1 and 2 of the program if you wish
    - Copy the package.json, config.rb, gruntfile.js from the zip packages into your project folders if you
    go with this option
  - Go into each of the project folders and run `npm install` to get all dependences that you need.
3. We will not be going over Grunt during the talk; here is some information about it.

Grunt is a task runner - it helps with automation and development workflows. You can set up a file that uses
various extensions, in this case NPM extensions to do various things, like lint your code, combine it into
one file and minify it, run your test cases, or in this case, compile the css for development and/or production.

Other task runners exist and they can compile less and sass as well.

Grunt is included in the package.json and is what makes Grunt work in the project folder. However; to run
grunt commands via command line, you need another package that is not included in the package.json.

Open up terminal or base and run `npm install grunt-cli -g`. The -g tells npm that we want to install this
package globally and make it available to all projects. Because this is a global install, every developer working
on your project will need to install it as and be told to do so manually.

The grunt-cli npm package makes grunt commands available via command line - one of the reasons we install
it globally on the system.

To test it, type `grunt --version` - You should see the version returned.

Grunt projects require a Gruntfile.js to know what is available to the project. Feel free to open up the
Gruntfile.js and take a look at it.

It contains three sections.
- initConfig (Where we set up all the commands that grunt can manage for us)
- loadNpmTasks (The NPM pacakges we want to make available to Grunt; these are all in the dev-dependencies
  of the package.json you were provided)
- registerTask (A section were we can set up alias' to run one or multiple tasks for us)

The watch task is set up as the default task - this means that when you run `grunt` in the project directory;
it will trigger the watch task. In the case of this grunt file, it will watch for changes in the SCSS directory
and then run SASS:Dev for a dev compile of the SASS files. You could change this to watch for changes in the
Less directory instead.

A task has been set up to watch and compile development versions of the stylesheets for each of the methods.

`grunt wsass` for watching and compiling with SASS
`grunt wcompass` for watching and compiling with Compass
`grunt wless` for watching and compiling with Less

`ctrl-c` will stop the watch task from running.

The other commands you need to know to work with the files are

`grunt sass:dev`
`grunt sass:dist`
`grunt less:dev`
`grunt less:dist`

Examine the gruntfile and see if you can figure out what those tasks to. We will see what they do during the
talk.

## Partial Organization

- Inside the assets directory, create a directory named scss
- Inside the assets directory, create a directory named less
- Move into the scss directory and create a new file called style-sass.scss
- Create the following files inside the scss directory
  - `_scaffolding.scss`
  - `_utils.scss`
  - `_typography.scss`
  - `_forms.scss`
  - `_header.scss`
  - `_footer.scss`
  - `_content.scss`
- Move back into the assets folder and into the less folder
- Create a file called style-less.less
- Create the following files inside the less directory
  - `_scaffolding.less`
  - `_utils.less`
  - `_typography.less`
  - `_forms.less`
  - `_header.less`
  - `_footer.less`
  - `_content.less`
- Now add styles into the various partial files from the current style.css. Remember to keep them organized.
- Open up style-sass.scss and add `@import` statements for each of the scss partial files
  - They need to be in the order you want them to appear in the final css and remember that CSS is cascading
- Open up style-less.scss and add `@import` statements for each of the less partial files
  - They too need to be in the order you want them to appear in the final css...
- Finally run grunt sass:dev and grunt less:dev to see the files compile.
- You should now have a style-sass.css file in the css folder. Open up one of the HTML pages and include this
  CSS instead of the style.css page. Refresh the page - nothing should have changed!

## Variable Branding

1. Create a variables partial file in the scss folder and the less folder
2. Import this file to the styles-sass.scss and the styles-less.less folder
3. Add some variables into the file, like colors, font-faces and a base font-size
4. Go back into the partial files and replace all of the instances of these with the variable name
5. Compile the files
6. Import on of the two files into the portfolio instead of style.css
7. Change one of the variables, like a primary color or font-face
8. Compile the file again
9. Refresh the page

## Properties Extending

1. Open up `_utils` and add a .left/.right styles for floating objects left and right
2. Extend the .left and .right classes in the other partials where you are floating elements left or right,
remember to remove the float:left and float:right from those properties
3. Compile the less stylesheet and the scss stylesheet
4. Change the stylesheets again in the HTML and refresh the page - nothing should have changed.

## Include the Mixin

- Create your own mixin and include it. -It should contain arguments.

## Bootstrap Customized

1. Pick either bootstrap to build a new site or customize an existing project with. Install the
one you pick in a new or old project directory as an npm package. If you already have a site built on bootstrap
or foundation that you can change, you may want to use that.
2. Create your custom file for settings/variables and change some of the values
3. Update the main LESS file that imports all the partials to include the framework
4. Using the gruntfile.js sent out for Bootstrap.
5. Include the new stylesheet in your project. Send us a link or screenshot - we want to see your customizations
