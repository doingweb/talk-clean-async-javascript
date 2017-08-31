main();
async function main () {
  console.log('one');

  await setTimeoutPromise(1000);

  console.log('two');
}

function setTimeoutPromise (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
