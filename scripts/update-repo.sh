#!/bin/bash

###
# This scripts updates the local repo with the latest changes from github.
#
# The master branch will be REPLACED with what's in github and all local changes
# will be LOST.
###

git checkout master
git fetch -f origin
git fetch --tags origin
git reset --hard origin/master
