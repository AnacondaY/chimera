#!/bin/bash

#!/bin/bash
rm -rf ./site/dist

cd ./site/config

webpack --config prod.conf.js --progress