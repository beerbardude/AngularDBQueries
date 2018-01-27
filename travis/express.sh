#!/bin/bash

git clone https://github.com/ibwgr/todomvc-server.git
git clone https://github.com/arminbeiner/ExpressDB.git
cd ExpressDB
npm install
npm run build -- index.js &

