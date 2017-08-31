console.log('one');

setTimeoutPromise(1000).then(() => {
  console.log('two');
});

function setTimeoutPromise (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
