class: center, middle

# Clean Async JavaScript
## I’ve `await`ed a long time for this

👋Chris Antes

🌐@doingweb

---
class: center, middle

# What is async?

--

Picking up where you left off after waiting on something else.

---
exclude: true
class: center, middle

# Async in a web browser

---
class: center, middle

# Callbacks

---
class: center, middle

## Something just came up

--

.speaker.left[Hello?]

--

.speaker.right[Hey what's up?]

--

.speaker.left[Just wanted to check if you're able to make it to that thing later.]

--

.speaker.right[Oh crap, can I call you back? My fish tank just broke.]

--

.speaker.left[Okay.]

???

I'll call you back at your number and we can continue our conversation.

---
name: callback-example
class: middle

# .center[Callback example]

```js
console.log('one');

setTimeout(() => {
  console.log('two');
}, 1000);
```

???

This is known as "continuation-passing style", because the function you pass continues execution.

Note that the continuation gets indented, since it's a nested function.

---

# Going out for tacos

--

1. Hail a ride 📱

--

2. Drive to the taco place 🚕

--

3. Wait in line 🚶🚶🚶

--

4. Order tacos 🛒

--

5. Pay for tacos 💳

--

6. Wait for the tacos to be done ⏳

--

7. Eat the tacos 🌮🌮🌮🍴

---

# Callback Hell

```js
function goOutForTacos () {
  hailRide(err => {
    if (err) { giveUp(err); return; }
    driveToTacoPlace(err => {
      if (err) { giveUp(err); return; }
      waitInLine(err => {
        if (err) { giveUp(err); return; }
        orderTacos(err => {
          if (err) { giveUp(err); return; }
          pay(err => {
            if (err) { giveUp(err); return; }
            waitForTacos((err, tacos) => {
              if (err) { giveUp(err); return; }
              console.log(`😋🍴 ${tacos}.`)
            });
          });
        });
      });
    });
  });
}
```

---
class: small-code

# Refactor!

```js
function goOutForTacos () {
  hailRide(rideArrived);

  function rideArrived (err) {
    if (err) { giveUp(err); return; }
    driveToTacoPlace(rideComplete);
  }

  function rideComplete (err) {
    if (err) { giveUp(err); return; }
    waitInLine(readyToOrder);
  }

  function readyToOrder (err) {
    if (err) { giveUp(err); return; }
    orderTacos(payForTacos);
  }

  function payForTacos (err) {
    if (err) { giveUp(err); return; }
    pay(paymentComplete);
  }

  function paymentComplete (err) {
    if (err) { giveUp(err); return; }
    waitForTacos(tacosAreDone);
  }

  function tacosAreDone (err, tacos) {
    if (err) { giveUp(err); return; }
    console.log(`😋🍴 ${tacos}.`);
  }
}
```

???

This is certainly a big improvement over callback hell. Indentation is no longer increased by continuations, and the functions actually have names (making them easier to debug).

Having to pass continuations is still a little weird though. If you're in the (good) habit of writing small functions that do one thing, you might end up with a lot of function names that are kinda unintuitive. Since their job is to resume execution and handle errors before performing the next action, it seems the most readable way to name them is to imagine an "until" between the names (e.g., wait in line until ready to order). But this will usually leave you with names that describe states rather than actions, which is not something you necessarily expect with functions.

---
class: center, middle

# Promises

---
class: center, middle

## The claim check

--

.speaker.left[I'd like to leave my jacket here please.]

--

.speaker.right[No problem. Here is your claim check.]

--

.speaker.left[Thanks.]

--

.speaker.right[Just bring it back here later and we'll see if we still have your jacket.]

--

.speaker.left[What?]

---
name: promise-example
class: middle

# .center[Promise example]

```js
console.log('one');

setTimeoutPromise(1000).then(() => {
  console.log('two');
});

function setTimeoutPromise (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

Compare to the [callback example](#callback-example)

???

See the [MDN docs on Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) for more details.

---

# Thens all the way down

```js
function goOutForTacos () {
  return hailRide()
    .then(driveToTacoPlace)
    .then(waitInLine)
    .then(orderTacos)
    .then(pay)
    .then(waitForTacos)
    .then(tacos => console.log(`😋🍴 ${tacos}.`))
    .catch(giveUp);
}
```

???

Very readable.

Any of those functions can throw an exception (or reject a promise) and the error will be caught by the `catch`. No need for each of them to be wrapped by something to deal with it.

This is really powerful and prevalent. Most async JavaScript APIs use Promises, and I'd rate it pretty high in my list of the most important things to learn well as a JS developer.

And it's especially important to learn well, because there's some pitfalls and subtle issues about them that can bite you.

---
exclude: true

# A Promise isn't always a Promise

"Promises" are really more of a concept. There are a bunch of different specs and implementations out there aside from the native one.

[![Bluebird](http://bluebirdjs.com/img/libbblog_v3.png)](http://bluebirdjs.com/docs/getting-started.html)
[![Q](http://kriskowal.github.io/q/q.png)](https://github.com/kriskowal/q)
[![A+](https://avatars2.githubusercontent.com/u/2680116?v=4&s=200)](https://promisesaplus.com/)
[$q](https://docs.angularjs.org/api/ng/service/$q)


Let's just talk about the native one, though.

???

Non-native Promise libraries like Bluebird might be really useful if you need enhanced control flow (e.g., running an array of promise-returning functions in series) or performance optimizations. Use [whatever works best](https://stackoverflow.com/questions/34960886/are-there-still-reasons-to-use-promise-libraries-like-q-or-bluebird-now-that-we) for you (and/or your team) in a given situation.

---

# Promise Hell

```js
function goOutForTacos () {
  return hailRide().then(() => {
    return driveToTacoPlace().then(() => {
      return waitInLine().then(() => {
        return orderTacos().then(() => {
          return pay().then(() => {
            return waitForTacos().then(tacos => {
              console.log(`😋🍴 ${tacos}.`)
            });
          });
        });
      });
    });
  }).catch(giveUp);
}
```

???

Despite the callback functions being a bit easier to refactor out and name, promises are still quite prone to pyramiding. A lot of times when this occurs, the sequence is still linear and it is not difficult to refactor into separate named functions and remove indentation.

---
exclude: true
# Need to return promises
## ...most of the time

```js

```

---
class: small-code

# Don't forget to return your promise chains!

```js
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
```

???

Very subtle and difficult-to-track-down bugs can occur when a `return` is missing from a nested promise chain. Since the result is not being returned, not only is it not available to the outer promise chain, any exceptions that arose in it are lost.

---
class: center, middle

# Async/Await

---
class: middle

# .center[Async/Await example]

```js
main();
async function main () {
  console.log('one');

  await setTimeoutPromise(1000);

  console.log('two');
}

function setTimeoutPromise (ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
```

Compare to the [callback example](#callback-example) and [Promise example](#promise-example)

--

🤔 Same `setTimeoutPromise` function as before...

---

# Async/Await uses Promises

```js
main();
async function main () {
  let unawaitedAnswer = add(1, 2);
  console.log(`Unawaited answer: ${unawaitedAnswer}`); // [object Promise]

  let awaitedAnswer = await add(1, 2);
  console.log(`Awaited answer: ${awaitedAnswer}`); // 3

  add(1, 2).then(thennedAnswer => {
    console.log(`Thenned answer: ${thennedAnswer}`); // 3
  });

  let allTheAnswers = await Promise.all([
    add(1, 2),
    add(3, 4),
    add(5, 6),
    add(7, 8),
    add(9, 10)
  ]);

  console.log(`All the answers: ${allTheAnswers}`); // 3,7,11,15,19
}

async function add (a, b) {
  return a + b;
}
```

???

It's stuff you're used to under the hood!

You'll need a good understanding of promises in order to choreograph [more complex awaiting](https://medium.com/@bluepnume/even-with-async-await-you-probably-still-need-promises-9b259854c161#5a72).

---

# Effortlessly getting tacos

```js
async function goOutForTacos () {
  try {
    await hailRide();
    await driveToTacoPlace();
    await waitInLine();
    await orderTacos();
    await pay();
    let tacos = await waitForTacos();
    console.log(`😋🍴 ${tacos}.`);
  } catch (error) {
    giveUp(error);
  }
}
```

???

Our old friend, `try`/`catch` is back!

This looks just like synchronous code. The only new things are `async` and `await`. No callbacks or triangles!

This can be debugged like regular synchronous code.

---
class: center, middle

# Thanks!

Please send me feedback if you have any :)
