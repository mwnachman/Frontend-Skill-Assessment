import { combineReducers } from 'redux';
import TagReducer from './tag';
import TagMenuReducer from './tagMenu';


const allReducers = combineReducers({
  tagMenu: TagMenuReducer,
  tags: TagReducer
});


export default allReducers;