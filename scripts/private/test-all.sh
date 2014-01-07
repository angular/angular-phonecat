#!/bin/sh

set -ex

function cleanUp() {
  kill $WEBSERVER_PID
  git checkout -f $BRANCH
}

trap cleanUp EXIT

# Define reasonable set of browsers in case we are running manually from commandline
if [[ -z "$BROWSERS" ]]
then
  BROWSERS="Chrome"
fi

if [[ -z "$BROWSERS_E2E" ]]
then
  BROWSERS_E2E="Chrome"
fi

ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
BRANCH=$(git rev-parse --abbrev-ref HEAD)
npm install

./scripts/web-server.js > /dev/null &
WEBSERVER_PID=$!

# Steps 0 and 1 do not have any tests - but going to step 0 copies useful files
# Step 2 only has unit tests
git checkout -f step-2
./node_modules/karma/bin/karma start config/karma.conf.js --single-run

# Steps 3 through 12 have both unit and e2e tests
for i in {3..12}
do
  git checkout -f step-$i

  ./node_modules/karma/bin/karma start config/karma.conf.js --single-run --browsers $BROWSERS --reporters=dots --no-colors --no-color
  ./node_modules/karma/bin/karma start config/karma-e2e.conf.js --browsers $BROWSERS_E2E --reporters=dots --no-colors --no-color

done