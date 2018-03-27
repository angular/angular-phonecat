#!/bin/bash

# Install nvm for this shell
source ~/.nvm/nvm.sh

# Use Node.js v4.x
nvm install 4

# Run all tests and publish steps on gh-pages
scripts/private/update-gh-pages.sh
