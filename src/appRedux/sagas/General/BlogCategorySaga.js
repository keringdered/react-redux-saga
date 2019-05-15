import {call,fork,all,takeEvery,put} from 'redux-saga/effects'
import axios from  'axios';
import {API_ENDPOINT} from "../../../constants/ActionTypes";
import {FETCH_BLOG_CATEGORIES, fetchBlogCategorySuccessGenerator} from "../../actions/General/BlogCategoryActions";


const fetchBlogCategoriesRequest = async request =>
    await axios.get(API_ENDPOINT+"/admin/blog_categories",{params:request})
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
export function* fetchBlogCategoriesDefault() {
    yield takeEvery(FETCH_BLOG_CATEGORIES,fetchBlogCategories);
}

export default function* rootSaga() {
    yield all([
        fork(fetchBlogCategoriesDefault),
    ]);
}