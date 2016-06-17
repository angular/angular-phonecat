#!/bin/bash

######
# This script is useful only for committers to the upstream github repo.
######

# List tags starting with `step-` to avoid deleting tags for older branches (e.g. 1.4-step-*).
for tag in `git tag --list step-*`; do
  git tag -d $tag
done

for sha in `git log --oneline | grep step- | cut -d ' ' -f 1`; do
  tag=`git log $sha...$sha~1 --oneline | cut -d ' ' -f 2`
  echo Creating tag $tag for $sha
  git tag $tag $sha
done
