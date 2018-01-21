#!/bin/bash
ORIGIN=$(git remote -v | awk '$1=="origin" && $3=="(push)" {print $2}');
MESSAGE=$(cat package.json | grep version | head -1);

rm -rf site/dist

mkdir site site/dist
cd site/dist

git init
git remote add origin $ORIGIN
git fetch
git checkout -t origin/gh-pages

rm *
npm run build

git add . -A
git commit -m "$MESSAGE"
git push

