#End 2 End Testing (ngScenario)
To run the end-2-end tests against the application you use Karma or the `runner.html` page.

## Starting the Web Server
In either case you will need the application to be running via the web-server. 
From the root folder of the repository run:

```
node scripts/web-server.js
```

The application should now be available at `http://localhost:8000/app/index.html`

## Testing with Karma
Start the Karma test runner using the e2e configuration:

```
karma start config/karma-e2e.conf.js
```

## Testing in a Browser
Browse directly to the e2e test runner page:

```
http://localhost:8000/test/e2e/runner.html
```