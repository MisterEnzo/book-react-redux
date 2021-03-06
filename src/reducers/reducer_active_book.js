// State argument is not application state. It is only the State
// that this reducer is responsible for
export default function(state = null, action) {
  switch(action.type) {
  case 'BOOK_SELECTED':
    return action.payload;
  }

  return state;
}
