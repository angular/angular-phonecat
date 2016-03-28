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

# Ensure that all the dependencies are there
npm install

# Ensure that the chromeDriver is installed
npm run update-webdriver

# Start up the web server
node_modules/.bin/http-server -a localhost -p 8000 -c-1 ./app &
WEBSERVER_PID=$!

# Run the unit and e2e tests
# (Steps 0 and 1 do not have tests)
for i in $(seq 2 14)
do
  git checkout -f step-$i

  node_modules/.bin/karma start karma.conf.js --single-run
  node_modules/.bin/protractor e2e-tests/protractor.conf.js

done
