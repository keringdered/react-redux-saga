import {all} from "redux-saga/effects";
import BlogCategorySaga from "./General/BlogCategorySaga";
import SystemCategoriesSaga from "./App/SystemCategoriesSaga";
import SubCategorySaga from "./App/SubCategorySaga";

const defaultSagas =[BlogCategorySaga(),SystemCategoriesSaga(),SubCategorySaga()];

/*concatenate here*/
export default  function*  rootSaga(getState){
    yield all(defaultSagas);
}