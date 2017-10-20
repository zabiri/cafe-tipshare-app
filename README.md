# Cafe Berlin Tip-share Calculator

### What/Why?

My current employer, Cafe Berlin (Columbia, MO) impliments a tip-sharing system with service staff.  At the end of the day, we take our tips and pool them together.  We then either split them evenly, or divide them based on an hourly rate (in the case that someone comes in late or leaves early).  Some days, we have various other tipouts or percentages we give support staff.  This can be an obnoxious task at the end of an 8-9 hour shift on your feet with low blood sugar, and so I made this app to assist.  

Obviously, this is a bespoke solution for a single restaurant, but some of the features may be relevant to other tip-sharing establishments.  Speaking of features:

##

### Basic useful feature list:

 * Takes gross tips after barista and bartender tips (essentially whatever ends up in the tip jar) and - through a series of whitespace and toggles - spits out who walks with how much.
 * Options for kitchen, silverware roller, and weekend or weekday support staff shares.
 * Options for variable number of servers, and a single hourly server - Monday -> Wednesday, one server comes in an hour later.  Some days, we send someone home early.  We add total hours worked divided by hours worked to get the hourly rate, and multiply it by an employees hours. 
 
##

### Some things I eventually intend to impliment/refactor:

* Right now, much of the code resides in one component.  I had put it together as I was learning Angular 4, but hadn't mastered TypeScript's idiosyncracies within Angular involving passing data between components and then doing math with that data.  I intend to make a more logical component tree so the code is more modular and easier to read.  
* I intend to make support staff percentage and support staff numbers variable.  Again, this will be less "flying v" bootstrap div hell when it becomes more modular.
* I intend to make silverware roller tipout and kitchen tipout variable.  Right now, they are hard coded at our typical minimal amount for weekends.  

##

This page is live on [my webserver at http://zachbiri.com/sandbox/cbts/](http://zachbiri.com/sandbox/cbts/), if you'd rather not ng build it yourself.  

### Stuff used to make this:

 * [Angular 4](https://angular.io/) for the framework
 * [bootstrap 3.3.7](http://getbootstrap.com/) for quick prototype styling

## (Angular CLI's readme below)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.4.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
