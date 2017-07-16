stepOne()
  .then(stepTwo)
  .then(stepThree)
  .then(() => console.log('Looks like everything went well.'))
  .catch(handleRejection);

function stepOne () {
  return succeed()
    .then(() => console.log('Step one completed successfully.'));
}

function stepTwo () {
  fail()
    .then(() => console.log('Step two completed successfully.'));
}

function stepThree () {
  return succeed()
    .then(() => console.log('Step three completed successfully.'));
}


function succeed () {
  return Promise.resolve();
}

function fail () {
  console.log('Failure!');
  return Promise.reject();
}

function handleRejection (error) {
  console.log('Whew, handled the error.');
}
