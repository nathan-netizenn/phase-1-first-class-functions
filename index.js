function receivesAFunction(callback) {
    callback(); // call the callback function
  }
function myCallBack() {
    Return `Hello World`;
}
receivesAFunction(myCallBack);
function returnsANamedFunction() {
    return function named() {
        console.log(`Am a named function!`);
    }
}
function returnsAnAnonymousFunction() {
    return function() {}
}