#! /bin/sh
set -xe

NG_BUILD_DIR=$1
if [[ !  -e "$NG_BUILD_DIR/angular.js" ]]; then
  echo "Usage: update-angular <angular-build-dir>"
  exit 1
fi

SCRIPT_DIR=$(dirname $0)
ROOT_DIR=$SCRIPT_DIR/../../
VERSION=$(cat $NG_BUILD_DIR/version.txt)

cd $ROOT_DIR

# go back before the first step
git reset --hard step-0^

# Remove the previous angular version
rm -fr app/lib/angular
# Copy all the angular library files over
cp -r $NG_BUILD_DIR app/lib/angular
# Clean up (in case the angular docs were left in the repos from)
rm -fr app/lib/angular/docs
# Update the inlined angular-loader in app/index-async.html
sed '/@@NG_LOADER@@/{
    s/@@NG_LOADER@@//g
    r app/lib/angular/angular-loader.min.js
}' app/index-async.html.template > app/index-async.html

git add $ROOT_DIR/app
git commit -m"BUMP ANGULAR VERSION to $VERSION"

for (( i = 0; i <= 12; i++ )); do
  git cherry-pick step-$i
done

$SCRIPT_DIR/retag.sh