#!/bin/bash

# Install nvm for this shell
source ~/.nvm/nvm.sh

# Use Node.js v4.x
nvm install 4

# Run all tests
test-all.sh

# Publish steps on gh-pages
update-gh-pages.sh
