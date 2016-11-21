# AngularJS Phone Catalog Tutorial Application


## Overview

This application takes the developer through the process of building a web-application using
AngularJS. The application is loosely based on the **Google Phone Gallery**, which no longer exists.
Here is a historical reference: [Google Phone Gallery on WayBack][google-phone-gallery]

Each tagged commit is a separate lesson teaching a single aspect of the framework.

The full tutorial can be found at https://docs.angularjs.org/tutorial.


## Prerequisites

### Git

- A good place to learn about setting up git is [here][git-setup].
- You can find documentation and download git [here][git-home].

### Node.js and Tools

- Get [Node.js][node].
- Install the tool dependencies: `npm install`


## Workings of the Application

- The application filesystem layout structure is based on the [angular-seed][angular-seed] project.
- There is no dynamic backend (no application server) for this application. Instead we fake the
  application server by fetching static JSON files.
- Read the _Development_ section at the end to familiarize yourself with running and developing
  an Angular application.


## Commits / Tutorial Outline

You can check out any point of the tutorial using:

```
git checkout step-?
```

To see the changes made between any two lessons use the `git diff` command:

```
git diff step-?..step-?
```

### step-0 _Bootstrapping_

- Add the 'angular.js' script.
- Add the `ngApp` directive to bootstrap the application.
- Add a simple template with an expression.

### step-1 _Static Template_

- Add a stylesheet file ('app/app.css').
- Add a static list with two phones.

### step-2 _Angular Templates_

- Convert the static phone list to dynamic by:
  - Creating a `PhoneListController` controller.
  - Extracting the data from HTML into the controller as an in-memory dataset.
  - Converting the static document into a template with the use of the `ngRepeat` directive.
- Add a simple unit test for the `PhoneListController` controller to show how to write tests and
  run them using Karma.

### step-3 _Components_

- Introduce components.
- Combine the controller and the template into a reusable, isolated `phoneList` component.
- Refactor the application and tests to use the `phoneList` component.

### step-4 _Directory and File Organization_

- Refactor the layout of files and directories, applying best practices and techniques that will
  make the application easier to maintain and expand in the future:
  - Put each entity in its own file.
  - Organize code by feature area (instead of by function).
  - Split code into modules that other modules can depend on.
  - Use external templates in `.html` files (instead of inline HTML strings).

### step-5 _Filtering Repeaters_

- Add a search box to demonstrate:
  - How the data-binding works on input fields.
  - How to use the `filter` filter.
  - How `ngRepeat` automatically shrinks and grows the number of phones in the view.
- Add an end-to-end test to:
  - Show how end-to-end tests are written and used.
  - Prove that the search box and the repeater are correctly wired together.

### step-6 _Two-way Data Binding_

- Add an `age` property to the phone model.
- Add a drop-down menu to control the phone list order.
- Override the default order value in controller.
- Add unit and end-to-end tests for this feature.

### step-7 _XHR & Dependency Injection_

- Replace the in-memory dataset with data loaded from the server (in the form of a static
  'phone.json' file to keep the tutorial backend agnostic):
  - The JSON data is loaded using the `$http` service.
- Demonstrate the use of `services` and `dependency injection` (DI):
  - `$http` is injected into the controller through DI.
  - Introduce DI annotation methods: `.$inject` and inline array

### step-8 _Templating Links & Images_

- Add a phone image and links to phone pages.
- Add an end-to-end test that verifies the phone links.
- Tweak the CSS to style the page just a notch.

### step-9 _Routing & Multiple Views_

- Introduce the `$route` service, which allows binding URLs to views for routing and deep-linking:
  - Add the `ngRoute` module as a dependency.
  - Configure routes for the application.
  - Use the `ngView` directive in 'index.html'.
- Create a phone list route (`/phones`):
  - Map `/phones` to the existing `phoneList` component.
- Create a phone detail route (`/phones/:phoneId`):
  - Map `/phones/:phoneId` to a new `phoneDetail` component.
  - Create a dummy `phoneDetail` component, which displays the selected phone ID.
  - Pass the `phoneId` parameter to the component's controller via `$routeParams`.

### step-10 _More Templating_

- Implement fetching data for the selected phone and rendering to the view:
  - Use `$http` in `PhoneDetailController` to fetch the phone details from a JSON file.
  - Create the template for the detail view.
- Add CSS styles to make the phone detail page look "pretty-ish".

### step-11 _Custom Filters_

- Implement a custom `checkmark` filter.
- Update the `phoneDetail` template to use the `checkmark` filter.
- Add a unit test for the `checkmark` filter.

### step-12 _Event Handlers_

- Make the thumbnail images in the phone detail view clickable:
  - Introduce a `mainImageUrl` property on `PhoneDetailController`.
  - Implement the `setImage()` method for changing the main image.
  - Use `ngClick` on the thumbnails to register a handler that changes the main image.
  - Add an end-to-end test for this feature.

### step-13 _REST and Custom Services_

- Replace `$http` with `$resource`.
- Create a custom `Phone` service that represents the RESTful client.
- Use a custom Jasmine equality tester in unit tests to ignore irrelevant properties.

### step-14 _Animations_

- Add animations to the application:
  - Animate changes to the phone list, adding, removing and reordering phones with `ngRepeat`.
  - Animate view transitions with `ngView`.
  - Animate changes to the main phone image in the phone detail view.
- Showcase three different kinds of animations:
  - CSS transition animations.
  - CSS keyframe animations.
  - JavaScript-based animations.


## Development with `angular-phonecat`

The following docs describe how you can test and develop this application further.

### Installing Dependencies

The application relies upon various Node.js tools, such as [Bower][bower], [Karma][karma] and
[Protractor][protractor]. You can install these by running:

```
npm install
```

This will also run Bower, which will download the Angular files needed for the current step of the
tutorial.

Most of the scripts described below will run this automatically but it doesn't do any harm to run
it whenever you like.

### Running the Application during Development

- Run `npm start`.
- Navigate your browser to [http://localhost:8000/](http://localhost:8000/) to see the application 
  running.

### Unit Testing

We recommend using [Jasmine][jasmine] and [Karma][karma] for your unit tests/specs, but you are free
to use whatever works for you.

- Start Karma with `npm test`.
- A browser will start and connect to the Karma server. Chrome and Firefox are the default browsers,
  others can be captured by loading the same URL or by changing the `karma.conf.js` file.
- Karma will sit and watch your application and test JavaScript files. To run or re-run tests just
  change any of your these files.

### End-to-End Testing

We recommend using [Protractor][protractor] for end-to-end (e2e) testing.

It requires a webserver that serves the application. See the
_Running the Application during Development_ section, above.

- Serve the application with: `npm start`
- In a separate terminal/command line window run the e2e tests: `npm run protractor`.
- Protractor will execute the e2e test scripts against the web application itself. The project is
  set up to run the tests on Chrome directly. If you want to run against other browsers, you must 
  modify the configuration at `e2e-tests/protractor-conf.js`.

**Note:**
Under the hood, Protractor uses the [Selenium Standalone Server][selenium], which in turn requires 
the [Java Development Kit (JDK)][jdk] to be installed on your local machine. Check this by running 
`java -version` from the command line.

If JDK is not already installed, you can download it [here][jdk-download].


## Application Directory Layout

```
app/                     --> all the source code of the app (along with unit tests)
  bower_components/...   --> 3rd party JS/CSS libraries, including Angular and jQuery
  core/                  --> all the source code of the core module (stuff used throughout the app)
    checkmark/...        --> files for the `checkmark` filter, including JS source code, specs
    phone/...            --> files for the `core.phone` submodule, including JS source code, specs
    core.module.js       --> the core module
  img/...                --> image files
  phone-detail/...       --> files for the `phoneDetail` module, including JS source code, HTML templates, specs
  phone-list/...         --> files for the `phoneList` module, including JS source code, HTML templates, specs
  phones/...             --> static JSON files with phone data (used to fake a backend API)
  app.animations.css     --> hooks for running CSS animations with `ngAnimate`
  app.animations.js      --> hooks for running JS animations with `ngAnimate`
  app.config.js          --> app-wide configuration of Angular services
  app.css                --> default stylesheet
  app.module.js          --> the main app module
  index.html             --> app layout file (the main HTML template file of the app)

e2e-tests/               --> config and source files for e2e tests
  protractor.conf.js     --> config file for running e2e tests with Protractor
  scenarios.js           --> e2e specs

node_modules/...         --> development tools (fetched using `npm`)

scripts/                 --> handy scripts
  private/...            --> private scripts used by the Angular Team to maintain this repo
  update-repo.sh         --> script for pulling down the latest version of this repo (!!! DELETES ALL CHANGES YOU HAVE MADE !!!)

bower.json               --> Bower specific metadata, including client-side dependencies
karma.conf.js            --> config file for running unit tests with Karma
package.json             --> Node.js specific metadata, including development tools dependencies
```


## Contact

For more information on AngularJS, please check out https://angularjs.org/.


[angular-seed]: https://github.com/angular/angular-seed
[bower]: http://bower.io/
[git-home]: https://git-scm.com/
[git-setup]: https://help.github.com/articles/set-up-git
[google-phone-gallery]: http://web.archive.org/web/20131215082038/http://www.android.com/devices
[jasmine]: https://jasmine.github.io/
[jdk]: https://wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads
[karma]: https://karma-runner.github.io/
[node]: https://nodejs.org/
[protractor]: http://www.protractortest.org/
[selenium]: http://docs.seleniumhq.org/
