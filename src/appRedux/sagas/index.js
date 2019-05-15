import {all} from "redux-saga/effects";
import BlogCategorySaga from "./General/BlogCategorySaga";

const defaultSagas =[BlogCategorySaga()];

/*concatenate here*/
export default  function*  rootSaga(getState){
    yield all(defaultSagas);
}