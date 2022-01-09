import { combineReducers } from 'redux';

import filtersReduser from './filtersReducer';
import pizzasReducer from './pIzzasreducer';

const rootReducer = combineReducers({
  filters: filtersReduser,
  pizzas: pizzasReducer,
});

export default rootReducer;
