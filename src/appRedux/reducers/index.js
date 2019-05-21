import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import BlogCategoriesReducer from "./General/BlogCategoryReducer";
import SystemCategoriesReducer from "./App/SystemCategoriesReducer";
import SubCategoryReducer from "./App/SubCategoryReducer";

const defaultReducers ={
    blogCategory:BlogCategoriesReducer,
    systemCategory:SystemCategoriesReducer,
    subCategory:SubCategoryReducer
};
export default (history) =>combineReducers(Object.assign({router: connectRouter(history)},defaultReducers));