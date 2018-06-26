

function parseJSON(user) {
  return {
    fullName: user.firstName + ' ' + user.lastName,
    loggedIn: true,
  };
}

function fetchCurrentUser(callback) {
  return $.ajax({
    success: user => callback(parseJSON(user)),
    type: 'GET',
    url: 'http://localhost:3000/user',
  });
}

if (typeof exports !== 'undefined') {
  exports.fetchCurrentUser = fetchCurrentUser;
}
