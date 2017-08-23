module.exports = {
  hailRide: () => { throw 'No rides available.'; },
  driveToTacoPlace: () => { throw 'Got a flat tire.'; },
  waitInLine: () => { throw 'They\'re closed!'; },
  orderTacos: () => { throw 'They\'re out of tacos!'; },
  pay: () => { throw 'The payment network was down.'; },
  waitForTacos: () => { throw 'They got the order wrong but I\'m too polite/hungry to do anything about it.'; }
};
