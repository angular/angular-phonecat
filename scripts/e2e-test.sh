#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Karma Server (http://vojtajina.github.com/karma)"
echo "-------------------------------------------------------------------"

karma start $BASE_DIR/../config/karma-e2e.conf.js $*
