# nightwatch-bug-example


Check the tests directory, the rest of the project is a standart vue-cli output, I added a file named tests/config.js,
and I try to import it in tests/e2e/test.js and simply console.log it's content, the console throws the following error:
  
  import config from '../../config';
       ^^^^^^

  SyntaxError: Unexpected identifier
      at new Script (vm.js:79:7)
      at createScript (vm.js:251:10)
      at Object.runInThisContext (vm.js:303:10)
      at Module._compile (internal/modules/cjs/loader.js:657:28)
      at Object.Module._extensions..js (internal/modules/cjs/loader.js:700:10)
      at Module.load (internal/modules/cjs/loader.js:599:32)
      at tryModuleLoad (internal/modules/cjs/loader.js:538:12)
      at Function.Module._load (internal/modules/cjs/loader.js:530:3)
      at Module.require (internal/modules/cjs/loader.js:637:17)
      at require (internal/modules/cjs/helpers.js:20:18)



## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```
