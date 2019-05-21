import {HIDE_MODAL, SHOW_MODAL} from "../../actions/General/CommonActions";

const INIT_STATE ={
    showModal:false,
};

const CommonReducer =(state = INIT_STATE,action)=>{
    switch (action.type) {
        case SHOW_MODAL:
            return{
                ...state,
                showModal:true
            };
        case HIDE_MODAL:
            return {
                ...state,
                showModal:false
            };
        default:
            return state;

    }
};
export default CommonReducer;