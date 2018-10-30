#!/bin/bash

set -ex

cleanUp () {
  kill $WEBSERVER_PID
  git checkout -f $BRANCH
}

trap cleanUp EXIT

ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
BRANCH=$(git rev-parse --abbrev-ref HEAD)
COMMIT=$(git rev-parse HEAD)

# Ensure that all the dependencies are there
npm install

# Ensure that the chromeDriver is installed
node_modules/.bin/webdriver-manager update --gecko false --standalone false

# Start up the web server
node_modules/.bin/http-server ./app -a localhost -p 8000 -c-1 --silent &
WEBSERVER_PID=$!

# Run the unit and e2e tests
# (Steps 0 and 1 do not have tests)
for i in $(seq 2 14)
do
  if [[ $TRAVIS ]] && [[ "$TRAVIS_REPO_SLUG" == "angular/angular-phonecat" ]] && [[ "$TRAVIS_PULL_REQUEST" == "false" ]]; then
    # On non-PR builds on CI, use the `step-*` tags.
    git checkout -f step-$i
  else
    # Locally and on PR builds on CI, use the last commits.
    # (Assumes that the last commits are the `step-*` commits.)
    git checkout -f $COMMIT~$((14 - $i))
  fi

  node_modules/.bin/karma start karma.conf.js --single-run --browsers ChromeHeadless,FirefoxHeadless
  node_modules/.bin/protractor e2e-tests/protractor.conf.js --directConnect --capabilities.chromeOptions.args headless
done
