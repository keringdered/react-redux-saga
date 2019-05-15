import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import BlogCategoriesReducer from "./General/BlogCategoryReducer";

const defaultReducers ={
    blogCategory:BlogCategoriesReducer
};
export default (history) =>combineReducers(Object.assign({router: connectRouter(history)},defaultReducers));