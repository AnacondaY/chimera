#!/bin/bash

# clear previous publishment
rm -rf lib
# set env
cross NODE_ENV=production
# compile js
babel src/components --out-dir lib --copy-files --ignore demo
# compile sass
node scripts/styleGenerator.js