let { hailRide, driveToTacoPlace, waitInLine, orderTacos, pay, waitForTacos } = require('./steps'),
  { giveUp } = require('../util');

console.log('Going through callback hell for some tacos.');

goOutForTacos();

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
