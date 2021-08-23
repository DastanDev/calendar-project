/** @format */

import {persistCombineReducers} from 'redux-persist';
// import storage from "redux-persist/es/storage";

// You have to import every reducers and combine them.
//import {reducer as storeReducer} from './store';
import storage from 'redux-persist/lib/storage';

const config = {
  key: 'root',
  storage,
  blacklist: [

  ],
};

export default persistCombineReducers(config, {


});
