module.exports = {
  hailRide: () => Promise.reject('No rides available.'),
  driveToTacoPlace: () => Promise.reject('Got a flat tire.'),
  waitInLine: () => Promise.reject('They\'re closed!'),
  orderTacos: () => Promise.reject('They\'re out of tacos!'),
  pay: () => Promise.reject('The payment network was down.'),
  waitForTacos: () => Promise.reject('They got the order wrong but I\'m too polite/hungry to do anything about it.')
};
