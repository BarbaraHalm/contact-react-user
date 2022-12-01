import {legacy_createStore as createStore, combineReducers} from 'redux'
import ContactReducer from "../Reducer/ContactReducer";
import ContactAuthReduce from "../Reducer/ContactAuthReduce"
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 

const persistConfig = {
    key: 'root',
    storage,
  }

let reducers = combineReducers({
    ContactReducer: ContactReducer,
    ContactAuthReduce: ContactAuthReduce,
});
const persistedReducer=persistReducer(persistConfig, reducers)
let Store = createStore(persistedReducer)
let persistor = persistStore(Store)

   export { Store, persistor }
  
