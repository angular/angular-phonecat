#!/bin/bash

scripts/private/retag.sh
git push --force upstream
git push --tags --force upstream
