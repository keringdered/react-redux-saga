import {all} from "redux-saga/effects";

const defaultSagas =[];

/*concatenate here*/
export default  function*  rootSaga(getState){
    yield all(defaultSagas);
}