# Cafe Berlin Tip-share Calculator v2

### What/Why?

My current employer, Cafe Berlin (Columbia, MO) impliments a tip-sharing system with service staff.  At the end of the day, we take our tips and pool them together.  We then either split them evenly, or divide them based on an hourly rate (in the case that someone comes in late or leaves early).  Some days, we have various other tipouts or percentages we give support staff.  This can be an obnoxious task at the end of an 8-9 hour shift on your feet with low blood sugar, and so I made this app to assist.  

Obviously, this is a bespoke solution for a single restaurant, but some of the features may be relevant to other tip-sharing establishments.  Speaking of features:

##

### Basic useful feature list:

 * Takes gross tips after barista and bartender tips (essentially whatever ends up in the tip jar) as well as any other information relevant to that particular shift, and spits out the right splits.
 * Calculated support staff tipout
 * Option for patio server, weather permitting, and updated tip split
 
##

### Some things I eventually intend to impliment/refactor:

* I'd like for the four day panels to be dynamically generated by mapping over an array in state (to cut down on redundant code)
* I'd like to migrate some of the logic in the Output component to the reducer.
* General code cleanup in both the components and the scss.  
* Redundant values in scss moved to utility classes

##

### Version history:

* 2.0 - the React 16.3 version
  * The current version, made with React+Redux, because I enjoy React a little more than Angular.  
* 1.0 - the Angular 4 version (hosted [here](http://zachbiri.com/sandbox/cbts))
  * The source for this version is, unfortunately, lost forever:  I was extremely new to GitHub and accidentally pushed up a blank Angular project without noticing.   Since you can't really de-compile built Angular, my dist version still hosted above is all that remains of v1.0.  How embarrassing!

##

This page is live on my webserver at http://zachbiri.com/cbtip, if you'd rather not build it yourself. 

### Stuff used to make this:

 * [React](https://reactjs.org/)  via [create-react-app](https://github.com/facebook/create-react-app)
 * [Redux](http://redux.js.org) :yum:
 * [Sass](https://sass-lang.com/)  :heart:
