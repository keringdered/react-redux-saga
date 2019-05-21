import {call,fork,all,takeEvery,put} from 'redux-saga/effects'
import axios from  'axios';
import {API_ENDPOINT} from "../../../constants/ActionTypes";
import {
    ADD_SYSTEM_CATEGORIES,
    addSystemCategorySuccessGenerator, DELETE_SYSTEM_CATEGORIES,
    deleteSystemCategorySuccessGenerator,
    EDIT_SYSTEM_CATEGORIES,
    editSystemCategorySuccessGenerator,
    FETCH_SYSTEM_CATEGORIES,
    fetchSystemCategorySuccessGenerator
} from "../../actions/App/SystemCategoriesActions";



const fetchSystemCategoriesRequest = async request =>
    await axios.get(API_ENDPOINT+"/user/categories",{params:request})
        .then(response =>response)
        .catch(error=>error.response);
const addSystemCategoriesRequest = async request =>
    await axios.post(API_ENDPOINT+"/user/categories",request)
        .then(response =>response)
        .catch(error=>error.response);
const updateSystemCategoriesRequest = async request =>
    await axios.put(API_ENDPOINT+"/user/categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);
const deleteSystemCategoriesRequest = async request =>
    await axios.delete(API_ENDPOINT+"/user/categories/"+request.id,request)
        .then(response =>response)
        .catch(error=>error.response);

function* fetchSystemCategories({payload}){
    try{
        let request  = {...payload};
        const response = yield call(fetchSystemCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(fetchSystemCategorySuccessGenerator(response.data.data));
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
function* addSystemCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(addSystemCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(addSystemCategorySuccessGenerator(response.data.data));
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
function* updateSystemCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(updateSystemCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(editSystemCategorySuccessGenerator(response.data.data));
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
function* deleteSystemCategory({payload}){
    try{
        let request  = {...payload};
        const response = yield call(deleteSystemCategoriesRequest,request);
        if(response.status ===200 || response.status ===201){
            if(response.data.success){
                yield put(deleteSystemCategorySuccessGenerator(response.data.data));
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
export function* fetchSystemCategoriesDefault() {
    yield takeEvery(FETCH_SYSTEM_CATEGORIES,fetchSystemCategories);
}
export function* deleteSystemCategoriesDefault() {
    yield takeEvery(DELETE_SYSTEM_CATEGORIES,deleteSystemCategory);
}
export function* addSystemCategoriesDefault() {
    yield takeEvery(ADD_SYSTEM_CATEGORIES,addSystemCategory);
}

export function* updateSystemCategoriesDefault() {
    yield takeEvery(EDIT_SYSTEM_CATEGORIES,updateSystemCategory);
}
export default function* rootSaga() {
    yield all([
        fork(fetchSystemCategoriesDefault),
        fork(addSystemCategoriesDefault),
        fork(updateSystemCategoriesDefault),
        fork(deleteSystemCategoriesDefault),
    ]);
}