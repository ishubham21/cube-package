sed -i 's^("registry": "https://registry-url")^"registry": "https://registry.npmjs.org"^' package.json
npm publish --access public
