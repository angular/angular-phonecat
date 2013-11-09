ROOT_DIR=`dirname $0`/../..

cd $ROOT_DIR
npm install

./scripts/private/snapshot.sh

SANDBOX_DIR=$ROOT_DIR/angular-phonecat-snapshots/sandbox
cd $SANDBOX_DIR

# Steps 0 and 1 do not have any tests - but going to step 0 copies useful files
./goto_step.sh 0

./scripts/web-server.js > /dev/null &
WEBSERVER_PID=$!

# Step 2 only has unit tests
./goto_step.sh 2
karma start config/karma.conf.js --single-run

# Steps 3 through 12 have both unit and e2e tests
for i in {3..12}
do
  ./goto_step.sh $i
  karma start config/karma.conf.js --single-run
  karma start config/karma-e2e.conf.js --single-run
done