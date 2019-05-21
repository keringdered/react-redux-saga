import {call,fork,all,takeEvery,put} from 'redux-saga/effects'
import axios from  'axios';
import {API_ENDPOINT} from "../../../constants/ActionTypes";
import {
    ADD_BLOG_CATEGORIES,
    addBlogCategorySuccessGenerator, DELETE_BLOG_CATEGORIES,
    deleteBlogCategorySuccessGenerator,
    EDIT_BLOG_CATEGORIES,
    editBlogCategorySuccessGenerator,
    FETCH_BLOG_CATEGORIES,
    fetchBlogCategorySuccessGenerator
} from "../../actions/General/BlogCategoryActions";



const fetchBlogCategoriesRequest = async request =>
    await axios.get(API_ENDPOINT+"/admin/blog_categories",{params:request})
        .then(response =>response)
        .catch(error=>error.response);
const addBlogCategoriesRequest = async request =>
    await axios.post(API_ENDPOINT+"/admin/blog_categories",request)
        .then(response =>response)
        .catch(error=>error.response);
const updateBlogCategoriesRequest = async request =>
    await axios.put(API_ENDPOINT+"/admin/blog_categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);
const deleteBlogCategoriesRequest = async request =>
    await axios.delete(API_ENDPOINT+"/admin/blog_categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);

function* fetchBlogCategories({payload}){
    try{
        let request  = {...payload};
        const response = yield call(fetchBlogCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(fetchBlogCategorySuccessGenerator(response.data.data));
            }else{
                alert(response.data.message);
            }

        }else{
            alert(response.statusText);
        }

    }catch (e) {
        alert(e);

    }

}
function* addBlogCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(addBlogCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(addBlogCategorySuccessGenerator(response.data.data));
                alert(response.data.message);
            }else{
                alert(response.data.message);
            }

        }else{
            alert(response.statusText);
        }

    }catch (e) {
        alert(e);

    }

}
function* updateBlogCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(updateBlogCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(editBlogCategorySuccessGenerator(response.data.data));
                alert(response.data.message)
            }else{
                alert(response.data.message);
            }

        }else{
            alert(response.statusText);
        }

    }catch (e) {
        alert(e);

    }

}
function* deleteBlogCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(deleteBlogCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(deleteBlogCategorySuccessGenerator(response.data.data));
                alert(response.data.message)
            }else{
                alert(response.data.message);
            }

        }else{
            alert(response.statusText);
        }

    }catch (e) {
        alert(e);

    }

}
export function* fetchBlogCategoriesDefault() {
    yield takeEvery(FETCH_BLOG_CATEGORIES,fetchBlogCategories);
}
export function* deleteBlogCategoriesDefault() {
    yield takeEvery(DELETE_BLOG_CATEGORIES,deleteBlogCategory);
}
export function* addBlogCategoriesDefault() {
    yield takeEvery(ADD_BLOG_CATEGORIES,addBlogCategory);
}

export function* updateBlogCategoriesDefault() {
    yield takeEvery(EDIT_BLOG_CATEGORIES,updateBlogCategory);
}
export default function* rootSaga() {
    yield all([
        fork(fetchBlogCategoriesDefault),
        fork(addBlogCategoriesDefault),
        fork(updateBlogCategoriesDefault),
        fork(deleteBlogCategoriesDefault),
    ]);
}