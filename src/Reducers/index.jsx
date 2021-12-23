import { combineReducers } from 'redux';
import { reducerArticle } from './reducerArticle';
import { reducerIndicator } from './reducerIndicator';
import { reducerPages } from './reducerPages';
import { reducerUser } from './reducerUser';

export default combineReducers({
  reducerArticle,
  reducerIndicator,
  reducerPages,
  reducerUser,
});
