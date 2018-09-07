### Tech Stack
- react v16
- redux
- react-router-dom
- webpack v4: separate sets for development & production
- surge deploy


### Getting started
```
$ npm i
// install all dependencies
```
```
$ npm run dev
// start development with webpack-dev-server
```
```
$ npm run build
// production build
```
```
$ npm run deploy
// make production build and deploy to the surge.sh

$ npm run lint:fix
// fix eslint errors
```

###Before deployment
Edit CNAME file: write subdomain name for surge.sh service, for example 
```
surge-static.surge.sh
```




