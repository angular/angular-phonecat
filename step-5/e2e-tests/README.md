# End-2-End Testing (Protractor)

To run the end-2-end (e2e) tests against the application, we use [Protractor][protractor].

## Starting the Web Server

First, we need the application to be running via the web-server.
From the project's root directory run:

```
npm start
```

The application should now be available at http://localhost:8000/index.html.

## Testing with Protractor

As a one-time setup, download webdriver.

```
npm run update-webdriver
```

Start the Protractor test runner, using the e2e configuration:

```
npm run protractor
```


[protractor]: https://github.com/angular/protractor
