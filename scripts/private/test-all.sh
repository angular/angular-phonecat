ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
npm install

# Steps 0 and 1 do not have any tests - but going to step 0 copies useful files
# Step 2 only has unit tests
git checkout -f step-2
karma start config/karma.conf.js --single-run

# Steps 3 through 12 have both unit and e2e tests
for i in {3..12}
do
  git checkout -f step-$i
  ./scripts/web-server.js > /dev/null &
  WEBSERVER_PID=$!

  karma start config/karma.conf.js --single-run
  karma start config/karma-e2e.conf.js --single-run

  kill $WEBSERVER_PID
done