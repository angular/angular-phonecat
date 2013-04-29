#!/bin/bash

BASE_DIR=`dirname $0`

echo ""
echo "Starting Testacular Server (http://vojtajina.github.com/testacular)"
echo "-------------------------------------------------------------------"

karma start $BASE_DIR/../config/testacular.conf.js $*
