import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';

//STORE
const store = configureStore(
    {
        reducer: reducer
    }
);

export default store;

