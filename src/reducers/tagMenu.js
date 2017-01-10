const TagMenuReducer = (state = {
  focused: false,
  colorSelected: "#0fade9",
  popupVisible: false,
  tagExists: false,
  input: null
}, action) => {
  if ( action.type === 'TOGGLE_DROPDOWN') {
    return Object.assign({}, state, {
      focused: !state.focused
    })
  } else if ( action.type === 'UPDATE_INPUT' ) {
    let label = action.payload;
    return Object.assign({}, state, {
      input: label
    })
  } else if ( action.type === 'MAKE_INPUT' ) {
    let label = action.payload;
    return Object.assign({}, state, {
      input: label,
      tagExists: true
    })
  } else if ( action.type === 'TOGGLE_POPUP' ) {
    return Object.assign({}, state, {
      popupVisible: !state.popupVisible
    })
  } else if ( action.type === 'SELECT_COLOR' ) {
    let color = action.payload;
    return Object.assign({}, state, {
      colorSelected: color
    })
  } else if ( action.type === 'RESET_INPUT' ) {
    console.log('in reset input');
    return Object.assign({}, state, {
      popupVisible: false,
      colorSelected: "#0fade9",
      input: null
    })
  } else {
    return state;
  }
};

export default TagMenuReducer;