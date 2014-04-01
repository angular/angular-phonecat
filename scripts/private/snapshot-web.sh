#!/bin/bash

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

  node -e "require('shelljs/global'); sed('-i', /\"\\.\\.\\/bower_components/g, '\"../../../bower_components', '$SNAP_DIR/step-$i/app/index.html');"
done

git checkout -f master