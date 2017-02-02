export const selectColor = (color) => {
  return {
    type: 'SELECT_COLOR', 
    payload: color
  };
};

export const toggleDropdown = () => {
  return {
    type: 'TOGGLE_DROPDOWN'
  };
};

export const updateInput = (input) => {
  return {
    type: 'UPDATE_INPUT',
    payload: input
  };
};

export const togglePopupVisibility = () => {
  return {
    type: 'TOGGLE_POPUP'
  };
};

export const addTagAction = (label, color) => {
  return {
    type: 'ADD_TAG',
    payload: {
      label: label,
      color: color
    }
  };
};

export const makeTagInput = (label) => {
  return {
    type: 'MAKE_INPUT',
    payload: label
  };
};

export const resetInput = () => {
  return {
    type: 'RESET_INPUT'
  }
}

