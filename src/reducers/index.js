import { combineReducers } from 'redux';

import stock from './stock';
import common from './common';

export default combineReducers({ stock, common });
