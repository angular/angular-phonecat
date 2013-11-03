ROOT_DIR=`dirname $0`/../..
SANDBOX_DIR=$ROOT_DIR/angular-phonecat-snapshots/sandbox
cd $SANDBOX_DIR

echo "**************************************************************************"
echo "Make sure you have started the web-server and connected a browser to karma"
echo "**************************************************************************"

# Steps 0 and 1 do not have any tests - but going to step 0 copies useful files
./goto_step.sh 0

# Step 2 only has unit tests
./goto_step.sh 2
karma start config/karma.conf.js --browsers --single-run

# Steps 3 through 12 have both unit and e2e tests
for i in {3..12}
do
  ./goto_step.sh $i
  karma start config/karma.conf.js --browsers --single-run
  karma start config/karma-e2e.conf.js --browsers --single-run
done