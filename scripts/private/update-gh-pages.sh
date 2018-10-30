#!/bin/bash

#
# This script will update the `gh-pages` branch with any changes that have been made to the steps
# and to the dependencies.
#
# The tutorial step changes are computed by checking out each step into a snapshot folder and then
# overwriting the step folders in `gh-pages` with these new ones.
# If there are any changes they will be committed.
#
# The dependency changes are computed by running "npm install" then committing any changed files
# inside the `app/lib/` folder onto the `gh-pages` branch.
#
# Finally, the new commits are pushed to `origin/gh-pages`.

# Exit on error and print each command as it is run
set -ex

ROOT_DIR=`dirname $0`/../..
SNAP_DIR=angular-phonecat-snapshots-web

# Get into the correct directory
cd $ROOT_DIR

# Make sure we are on master
git checkout -f master

# Ensure that all the dependencies are there
npm install

# Run all the tests on each step
scripts/private/test-all.sh

# Clean out the snapshot directory if it was left behind
rm -rf $SNAP_DIR
mkdir $SNAP_DIR

# Iterate through each step, checking it out and copying it into the temporary snapshot directory
for i in $(seq 0 14)
do
  mkdir $SNAP_DIR/step-$i
  git checkout -f step-$i

  cp -r app $SNAP_DIR/step-$i/
done

# Move the snapshot step folders into the `gh-pages` branch
git checkout -f gh-pages
rm -rf step-*
mv $SNAP_DIR/* .
rm -rf $SNAP_DIR

# Commit any changes to the steps
git add --all step-*
git commit -m"chore(step): update live steps to new version of tutorial" || true

# Display an info message, including the last commit
echo gh-pages has been updated. See the log below.
git log -1

# Push changes to the gh-pages branch on GitHub
git push origin gh-pages
