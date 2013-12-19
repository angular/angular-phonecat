#!/bin/bash

BASE_DIR=`dirname $0`

# check if karma is installed globally so we can call it
KARMA_GLOBAL=true
command -v karma >/dev/null 2>&1 || { KARMA_GLOBAL=false; }

echo ""
echo "Starting Karma Server (http://karma-runner.github.io)"
echo "-------------------------------------------------------------------"

if $KARMA_GLOBAL; then
    karma start $BASE_DIR/../config/karma.conf.js $*
else
    $BASE_DIR/../node_modules/karma/bin/karma start $BASE_DIR/../config/karma.conf.js $*
fi
