 
### Install BackstopJS Globally
```
npm install -g backstopjs
```

To set the reference/test environments or to add paths to test you can edit the **paths.js** file 
by default it uses live (https://example.com) and local (http://example:8000) respectively. 

Run following commands under **gatsby** to generate tests;

```
npm run backstop:reference
npm run backstop:test
```

Upon running these commands a browser tab will open a summary showing the pages with highlighted differences.



