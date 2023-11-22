# Node native test runner: cannot mock a function

Steps to reproduce:
* Install [volta](https://volta.sh/) (or set the node version in the way you wish)
* Run `npm install && npm run test`
* You will see:
  * The default export test passing
  * The single import test failing
  * The start import test failing

If related to the transpiling, I'm getting the same result with `ts-node`, so it does not seem to be related to `@swc`'s transpilation.
