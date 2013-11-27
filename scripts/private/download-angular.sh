#! /bin/sh
if [ -n "$1" ]; then
  ROOT_DIR=`dirname $0`/../..
  cd $ROOT_DIR

  # Remove the previous angular version
  rm -fr app/lib/angular
  # Download and unzip the new angular version
  mkdir tmp
  curl https://raw.github.com/angular/code.angularjs.org/master/$1/angular-$1.zip -o tmp/angular.zip
  unzip tmp/angular.zip -d app/lib

  # Copy all the angular library files over
  mv app/lib/angular-$1 app/lib/angular

  # Clean up (in case the angular docs were left in the repos from)
  rm -fr app/lib/angular/docs
  rm -fr tmp
else
  echo "Usage: download-angular <version>"
fi