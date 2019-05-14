import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
const defaultReducers ={

};
export default (history) =>combineReducers(Object.assign({router: connectRouter(history)},defaultReducers));