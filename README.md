# Phonecat

This repo contains a forked version of [the original  Angular Phonecat example app](https://github.com/angular/angular-phonecat) with the e2e tests written in Cypress.

The Cypress tests match up 1:1 so they can be directly compared to the [original e2e protractor tests](e2e-tests/scenarios.js).

Each test covers the same functionality found in the protractor tests, and additionally new tests have been added to showcase functionality that exists only in Cypress.

The [tests are heavily commented](cypress/integration/app_spec.js) to ease you into the Cypress API.

## Help + Testing

The steps below will take you all the way through Cypress. It is assumed you have nothing installed except for node + git.

**If you get stuck, here is more help:**

* [Gitter Channel](https://gitter.im/cypress-io/cypress)
* [Cypress Docs](https://on.cypress.io)
* [Cypress CLI Tool Docs](https://github.com/cypress-io/cypress-cli)

### 1. Install Cypress

[Follow these instructions to install Cypress.](https://on.cypress.io/guides/installing-and-running#section-installing)

### 2. Fork this repo

If you want to experiment with running this project in Continous Integration, you'll need to [fork](https://github.com/cypress-io/cypress-example-phonecat#fork-destination-box) it first.

After forking this project in `Github`, run these commands:

```bash
## clone this repo to a local directory
git clone https://github.com/<your-username>/cypress-example-phonecat.git

## cd into the cloned repo
cd cypress-example-phonecat

## install the node_modules
npm install

## start the local webserver
npm start
```

The `npm start` script will spawn a webserver on port `8000` which hosts the Phonecat app.

You can verify this by opening your browser and navigating to: [`http://localhost:8000`](http://localhost:8000)

You should see the Phonecat app up and running. We are now ready to run Cypress tests.

### 3. Add the project to Cypress

[Follow these instructions to add the project to Cypress.](https://on.cypress.io/guides/installing-and-running#section-adding-projects)

### 4. Run in Continuous Integration

[Follow these instructions to run the tests in CI.](https://on.cypress.io/guides/continuous-integration#section-running-in-ci)
