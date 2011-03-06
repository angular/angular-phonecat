# AngularJS Phone Catalog Tutorial Application

## Overview

This application takes the developer thought the process of building a web-application using
angular. The application is loosely based on
[Google phone gallery](http://www.google.com/phone/). Each commit is a separate lesson
teaching a single aspect of angular.


## Prerequisites

### Git
- A good place to learn about setting up git is [here][git-github]
- Git [home][git-home] (download, documentation)

### Node.js
- Generic [installation instructions][node-generic].
- Mac DMG [here][node-mac]
- Windows download from [here][node-windows]. (You will also need [7 Zip] to unzip the node archive)
  (and don't forget to add `node.exe` to  your executable path)

## Workings of the application

- The application filesystem layout structure is based on the [angular-seed] project.
- There is no backend (no server) for this application. Instead we fake the XHRs by fetching
  static json files.
- Read the Development section at the end to familiarize yourself with running and developing
  an angular application.

## Commits / Tutorial Outline

You can check out any point of the tutorial using
    git checkout step-?

To see the changes which between any two lessons use the git diff command.
    git diff step-?..step-?

### step-0

- Initial [angular-seed] project layout


### step-1

- We have converted the seed application by removing all of the boiler-plate code.
- We have added single static HTML file which shows a static list of phones. (we will convert this
  static page into dynamic one with the help of angular)


### step-2

- Converted static page into dynamic one by:
  - create a root controller for the application
  - extracting the data from HTML into a the controller as a mock dataset
  - convert the static document into a template with the use of `ng:` [directive] (iterate over
    mock data using [ng:repeat] and render it into a view)
- Added unit test, which mostly shows how one goes about writing a unit test, rather then test
  something of value on our mock dataset.


### step-3

- added a search box to demonstrate how:
  - the data-binding works on input fields
  - to use [$filter] function
  - [ng:repeat] automatically shrinks and grows the number of phones in the view
- added an end-to-end test to:
  - show how end-to-end tests are written and used
  - to prove that the search box and the repeater are correctly wired together


### step-4

- replaced the mock data with data loaded from the server (in our case the JSON return is just a
  static file)
  - The JSON is loaded using the [$xhr] service
- Demonstrate the use of [services][service] and [dependency injection][DI]
  - The [$xhr] is injected into the controller through [dependency injection][DI]


### step-5

- adding phone image and links to phone pages
- css to style the page just a notch


### step-6

- making the order predicate for catalog dynamic
  - adding 'predicates' section to the view with links that control the order
  - ordering defaults to 'age' property
- css sugar


### step-7

- Introduce the [$route] service which allows binding URLs for deep-linking with views
  - Replace content of root controller PhonesCtrl with [$route] configuration
  - Map `/phones' to PhoneListCtrl and partails/phones-list.html
  - Map `/phones/phone-id' to PhoneDetailCtrl and partails/phones-detail.html
  - Copy deep linking parameters to root controller `params` property for access in sub controllers
  - Replace content of index.html with [ng:view]
- Create PhoneListCtrl view
  - Move code which fetches phones data into PhoneListCtrl
  - Move existing HTML from index.html to partials/phone-list.html
- Create PhoneDetailsCtrl view
  - Wire [$route] service to map `/phanes/phone-id` to map to this controller.
  - Empty PhoneDetailsCtrl
  - Place holder partials/phane-details.html

### step-8

- Fetch data for and render phone detail view
  - [$xhr] to fetch details for a specific phone
  - template for the phone detailed view
- CSS to make it look pretty
- Detail data for phones in JSON format

### step-9

- replace [$xhr] with [$resource]
  - demonstrate how a resource can be created using a [service]

## Development with angular-seed

The following docs apply to all angular-seed projects and since the phonecat tutorial is a project
based on angular-seed, the instructions apply to it as well.

### Running the app during development

1. run `./scripts/web-server.js`
2. navigate your browser to `http://localhost:8000/app/index.html` to see the app running in your
   browser.

### Running unit tests

We recommend using [jasmine](http://pivotal.github.com/jasmine/) and
[Karma](http://karma-runner.github.io) for your unit tests/specs, but you are free
to use whatever works for you.

Requires [node.js](http://nodejs.org/), Karma (`sudo npm install -g karma`) and a local
or remote browser.

* start `scripts/test.sh` (on windows: `scripts\test.bat`)
  * a browser will start and connect to the Karma server (Chrome is default browser, others can be captured by loading the same url as the one in Chrome or by changing the `config/karma.conf.js` file)
* to run or re-run tests just change any of your source or test javascript files


### End to end testing

Angular ships with a baked-in end-to-end test runner that understands angular, your app and allows
you to write your tests with jasmine-like BDD syntax.

Requires a webserver, node.js + `./scripts/web-server.js` or your backend server that hosts the angular static files.

Check out the
[end-to-end runner's documentation](http://docs.angularjs.org/guide/dev_guide.e2e-testing) for more
info.

* create your end-to-end tests in `test/e2e/scenarios.js`
* serve your project directory with your http/backend server or node.js + `scripts/web-server.js`
* to run do one of:
  * open `http://localhost:port/test/e2e/runner.html` in your browser
  * run the tests from console with [Karma](http://karma-runner.github.io) via
    `scripts/e2e-test.sh` or `script/e2e-test.bat`


## Application Directory Layout

    app/                --> all of the files to be used in production
      css/              --> css files
        app.css         --> default stylesheet
      img/              --> image files
      index.html        --> app layout file (the main html template file of the app)
      index-async.html  --> just like index.html, but loads js files asynchronously
      js/               --> javascript files
        app.js          --> application
        controllers.js  --> application controllers
        directives.js   --> application directives
        filters.js      --> custom angular filters
        services.js     --> custom angular services
      lib/              --> angular and 3rd party javascript libraries
        angular/
          angular.js        --> the latest angular js
          angular.min.js    --> the latest minified angular js
          angular-*.js      --> angular add-on modules
          version.txt       --> version number
      partials/             --> angular view partials (partial html templates)
        partial1.html
        partial2.html

    config/karma.conf.js        --> config file for running unit tests with Karma
    config/karma-e2e.conf.js    --> config file for running e2e tests with Karma

    scripts/            --> handy shell/js/ruby scripts
      e2e-test.sh       --> runs end-to-end tests with Karma (*nix)
      e2e-test.bat      --> runs end-to-end tests with Karma (windows)
      test.bat          --> autotests unit tests with Karma (windows)
      test.sh           --> autotests unit tests with Karma (*nix)
      web-server.js     --> simple development webserver based on node.js

    test/               --> test source files and libraries
      e2e/              -->
        runner.html     --> end-to-end test runner (open in your browser to run)
        scenarios.js    --> end-to-end specs
      lib/
        angular/                --> angular testing libraries
          angular-mocks.js      --> mocks that replace certain angular services in tests
          angular-scenario.js   --> angular's scenario (end-to-end) test runner library
          version.txt           --> version file
      unit/                     --> unit level specs/tests
        controllersSpec.js      --> specs for controllers
        directivessSpec.js      --> specs for directives
        filtersSpec.js          --> specs for filters
        servicesSpec.js         --> specs for services

## Contact

For more information on AngularJS please check out http://angularjs.org/

[7 Zip]: http://www.7-zip.org/
[angular-seed]: https://github.com/angular/angular-seed
[DI]: http://docs.angularjs.org/#!guide.di
[directive]: http://docs.angularjs.org/#!angular.directive
[$filter]: http://docs.angularjs.org/#!angular.Array.filter
[git-home]: http://git-scm.com
[git-github]: http://help.github.com/set-up-git-redirect
[ng:repeat]: http://docs.angularjs.org/#!angular.widget.@ng:repeat
[ng:view]: http://docs.angularjs.org/#!angular.widget.ng:view
[node-mac]: http://code.google.com/p/rudix/downloads/detail?name=node-0.4.0-0.dmg&can=2&q=
[node-windows]: http://node-js.prcn.co.cc/
[node-generic]: https://github.com/joyent/node/wiki/Installation
[java]: http://www.java.com
[$resource]: http://docs.angularjs.org/#!angular.service.$resource
[$rouet]: http://docs.angularjs.org/#!angular.service.$route
[service]: http://docs.angularjs.org/#!angular.service
[$xhr]: http://docs.angularjs.org/#!angular.service.$xhr
