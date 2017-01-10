import { createExistingTags, getTag } from '../helpers/helpers';
import existingTags from '../api/tags.json';

const tags = existingTags["tags:"];
const initialTags = createExistingTags(tags);

const TagReducer = (state =  
  initialTags
, action) => {
  if ( action.type === 'SELECT_TAG' ) {
    let label = action.payload;
    let currentTagIndex = getTag(state, label);
    let stateBeforeTag = state.slice(0, currentTagIndex);
    let stateAfterTag = state.slice(currentTagIndex + 1);
    let color = state[currentTagIndex].color; 
    let tag = {label: label, color: color, selected: true};
    if (currentTagIndex > -1) {
      return stateBeforeTag.concat(tag).concat(stateAfterTag);
    } else {
      return state;
    }
  } else if ( action.type === 'REMOVE_TAG') {
    let label = action.payload;
    let currentTagIndex = getTag(state, label);
    let stateBeforeTag = state.slice(0, currentTagIndex);
    let stateAfterTag = state.slice(currentTagIndex + 1);
    let color = state[currentTagIndex].color; 
    let tag = {label: label, color: color, selected: false};
    if (currentTagIndex > -1) {
      return stateBeforeTag.concat(tag).concat(stateAfterTag);
    } else {
      return state;
    }     
  } else if ( action.type === 'ADD_TAG' ) {
    let label = action.payload.label;
    let color = action.payload.color;
    let tag = {label: label, color: color, selected: true};
    return state.concat(tag);
  } else {
    return state;
  }
};


export default TagReducer;