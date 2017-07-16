main();
async function main () {
  let promise = new Promise(resolve => setTimeout(resolve, 3000));

  console.log('We have a Promise. Let\'s await it.');

  await promise;

  console.log('We awaited that Promise!');
}
