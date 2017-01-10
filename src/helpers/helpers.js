export const createExistingTags = (tags) => {
  let storeTags = [];
  for (var i = 0; i < tags.length; i++) {
    storeTags.push({
      "label": tags[i].label,
      "color": tags[i].color,
      "selected": false
    })
  };
  return storeTags;
};

export const getTag = (state, label) => {
  for (var i = 0; i < state.length; i++) {
    if (state[i].label === label) {
      return i;
    }
  }
};
