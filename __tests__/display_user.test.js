

/* global document */

'use strict';
const $ = require('jquery')
global.$ = $
global.fetchCurrentUser = jest.fn()
it('displays a user full name after a click', () => {
  // Set up our document body
  //TODO add implementation here

  // This module has a side-effect
  require('../displayUser');

  // Tell the fetchCurrentUser mock function to automatically invoke
  // its callback with some data
  //TODO add implementation here

  // Use jquery to emulate a click on our button
  //TODO add implementation here

  // Assert that the fetchCurrentUser function was called, and that the
  // #username span's inner text was updated as we'd expect it to.
  //TODO add implementation here
});
