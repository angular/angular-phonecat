#!/bin/bash

#
# This script will update the gh-pages branch with any changes that have been made to the steps
# and to the dependencies.
#
# The tutorial step changes are computed by checking out each step into a snapshot folder and then
# overwriting the step folders in gh-pages with these new ones.
# If there are any changes they will be committed
#
# The dependency changes are computed by running "bower update" then committing any changed files
# inside the bower_components folder onto the gh-pages branch.
#
# You should review these commits and push them to origin/gh-pages if valid.

ROOT_DIR=`dirname $0`/../..
cd $ROOT_DIR

SNAP_DIR=angular-phonecat-snapshots-web


rm -rf $SNAP_DIR
mkdir $SNAP_DIR

for i in {0..12}
do
  mkdir $SNAP_DIR/step-$i
  git checkout -f step-$i

  cp -r app $SNAP_DIR/step-$i/

  node -e "require('shelljs/global'); sed('-i', /\"\\.\\.\\/bower_components/g, '\"../../bower_components', '$SNAP_DIR/step-$i/app/index.html');"
done


# Move the snapshot step folders into the gh-pages branch
git checkout -f gh-pages
rm -rf step-*
mv $SNAP_DIR/* .
rm -rf $SNAP_DIR

# Commit any changes to the steps
git add --all step-*
git commit -m"chore(*): update live steps to new version of tutorial"

# Update the bower dependencies
bower update

# Commit any changes to the bower dependencies
git add --all bower_components
git commit -m"chore(bower_components): update bower dependencies"


# Display an info message, including the last two commits
echo gh-pages has been updated. See the log below.
git log -2
echo Please review the changes and then push to GitHub "git push origin gh-pages"
