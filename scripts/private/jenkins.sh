#!/bin/bash

# Install nvm for this shell
source ~/.nvm/nvm.sh

# Use Node.js v10.x
nvm install 10

# Run all tests and publish steps on gh-pages
scripts/private/update-gh-pages.sh
