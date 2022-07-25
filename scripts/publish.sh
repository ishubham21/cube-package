#! /bin/bash

#Hey, there! Shubham is using me to publish this to both NPM and GPR
#Dont't worry about me getting overriden because in the end, I'm just a copy of my parent file

rm -rf ./dist #Remove the existing distribution files
yarn build  #Finish a build

cp package.json dist/package.json

cd dist

#publishing the file on NPM
sed -i 's^"main": "./dist/index.js"^"main": "./index.js"^' package.json

sed -i 's^registry-url^registry.npmjs.org^' package.json

npm publish --access public

#Publishing the package on GPR

# sed -i 's^"name": "cube-package"^"name": "@ishubham21/cube-package"^' package.json

# sed -i 's^registry.npmjs.org^npm.pkg.github.com/^' package.json

# npm publish --access public