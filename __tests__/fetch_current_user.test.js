

const fetch = require('../fetchCurrentUser');

it('calls into $.ajax with the correct params', () => {
  global.$ = {ajax:jest.fn()}
  global.fetchCurrentUser = fetch.fetchCurrentUser
 
  // Call into the function we want to test
  const dummyCallback =  jest.fn();
  global.fetchCurrentUser(dummyCallback);

  // Now make sure that $.ajax was properly called during the previous
  // 2 lines
  expect($.ajax).toBeCalledWith({
    success: expect.any(Function),
    type: 'GET',
    url: 'http://localhost:3000/user',
  });
});
