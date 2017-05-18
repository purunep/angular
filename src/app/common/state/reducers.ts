import { Reducer } from 'redux';
import { appReducers } from './../appState/index';


export const reducers: { [reducerRootPath: string]: Reducer<any> } = Object.assign({},
     appReducers
);
