#!/bin/bash
rm -rf dist

cd site/config

webpack --config prod.conf.js --progress