// Whenever a Promise is pending, sets loading to true
// When it is fulfilled/rejected, sets loading to false

export default (state = false, action = {}) => {
  const match = action.type.match(/_([A-Z]+)$/);
  let promise_status;

  if (match) {
    promise_status = match[1];
  } else {
    promise_status = null;
  }

  switch(promise_status) {
    case "PENDING":
      return true;
    case "FULFILLED":
      return false;
    case "REJECTED":
      return false;
    default: return state;
  }
}
