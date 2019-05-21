import {call,fork,all,takeEvery,put} from 'redux-saga/effects'
import axios from  'axios';
import {API_ENDPOINT} from "../../../constants/ActionTypes";
import {
    ADD_SUB_CATEGORIES,
    addSubCategorySuccessGenerator, DELETE_SUB_CATEGORIES,
    deleteSubCategorySuccessGenerator,
    EDIT_SUB_CATEGORIES,
    editSubCategorySuccessGenerator,
    FETCH_SUB_CATEGORIES,
    fetchSubCategorySuccessGenerator
} from "../../actions/App/SubCategoryActions";



const fetchSubCategoriesRequest = async request =>
    await axios.get(API_ENDPOINT+"/user/sub-categories",{params:request})
        .then(response =>response)
        .catch(error=>error.response);
const addSubCategoriesRequest = async request =>
    await axios.post(API_ENDPOINT+"/user/sub-categories",request)
        .then(response =>response)
        .catch(error=>error.response);
const updateSubCategoriesRequest = async request =>
    await axios.put(API_ENDPOINT+"/user/sub-categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);
const deleteSubCategoriesRequest = async request =>
    await axios.delete(API_ENDPOINT+"/user/sub-categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);

function* fetchSubCategories({payload}){
    try{
        let request  = {...payload};
        const response = yield call(fetchSubCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(fetchSubCategorySuccessGenerator(response.data.data));
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
function* addSubCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(addSubCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(addSubCategorySuccessGenerator(response.data.data));
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
function* updateSubCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(updateSubCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(editSubCategorySuccessGenerator(response.data.data));
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
function* deleteSubCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(deleteSubCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(deleteSubCategorySuccessGenerator(response.data.data));
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
export function* fetchSubCategoriesDefault() {
    yield takeEvery(FETCH_SUB_CATEGORIES,fetchSubCategories);
}
export function* deleteSubCategoriesDefault() {
    yield takeEvery(DELETE_SUB_CATEGORIES,deleteSubCategory);
}
export function* addSubCategoriesDefault() {
    yield takeEvery(ADD_SUB_CATEGORIES,addSubCategory);
}

export function* updateSubCategoriesDefault() {
    yield takeEvery(EDIT_SUB_CATEGORIES,updateSubCategory);
}
export default function* rootSaga() {
    yield all([
        fork(fetchSubCategoriesDefault),
        fork(addSubCategoriesDefault),
        fork(updateSubCategoriesDefault),
        fork(deleteSubCategoriesDefault),
    ]);
}