export const removeTagAction = (label) => {
  return {
    type: 'REMOVE_TAG',
    payload: label
  };
};

export const selectTagAction = (label) => {
  return {
    type: 'SELECT_TAG',
    payload: label
  };
};

