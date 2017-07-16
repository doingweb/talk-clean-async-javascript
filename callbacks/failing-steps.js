module.exports = {
  hailRide: cb => cb('No rides available.'),
  rideTo: (x, cb) => cb('Got a flat tire.'),
  waitInLine: cb => cb('They\'re closed!'),
  orderTacos: cb => cb('They\'re out of tacos!'),
  pay: (x, cb) => cb('The payment network was down.'),
  waitForTacos: (x, cb) => cb('They got the order wrong but I\'m too polite/hungry to do anything about it.')
};
