main();
async function main () {
  console.log(`The add() function is: ${add}`);

  let unawaitedAnswer = add(1, 2);
  console.log(`Unawaited answer: ${unawaitedAnswer}`);

  let awaitedAnswer = await add(1, 2);
  console.log(`Awaited answer: ${awaitedAnswer}`);

  add(1, 2).then(thennedAnswer => {
    console.log(`Thenned answer: ${thennedAnswer}`);
  });

  let allTheAnswers = await Promise.all([
    add(1, 2),
    add(3, 4),
    add(5, 6),
    add(7, 8),
    add(9, 10)
  ]);

  console.log(`All the answers: ${allTheAnswers}`);
}

async function add (a, b) {
  return a + b;
}
