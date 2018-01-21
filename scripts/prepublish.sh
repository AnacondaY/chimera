#!/bin/bash
yarn lint && yarn test

if [ $? = 0 ]
    then
        # clear previous publishment
        rm -rf lib
        # set env
        cross-env NODE_ENV=production
        # compile js
        babel src/components --out-dir lib --copy-files --ignore demo
        # compile sass
        node scripts/styleGenerator
else
    echo 'Code encoutered certain error, check it'
fi