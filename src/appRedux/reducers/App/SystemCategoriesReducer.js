import {
    ADD_SYSTEM_CATEGORIES_SUCCESS,
    EDIT_SYSTEM_CATEGORIES_SUCCESS,
    FETCH_SYSTEM_CATEGORIES_SUCCESS,
    HIDE_CREATE_SYSTEM_CATEGORIES_FORM, HIDE_EDIT_SYSTEM_CATEGORIES_FORM,
    SHOW_CREATE_SYSTEM_CATEGORIES_FORM,
    SHOW_EDIT_SYSTEM_CATEGORIES_FORM
} from "../../actions/App/SystemCategoriesActions";


const INIT_STATE={
    systemCategoriesByID:{},
    systemCategoryToUpdate:{},
    systemCategoryToDelete:{},
    showSystemCategoryCreateForm:false,
    showSystemCategoryEditForm:false,
    showSystemCategoryDeleteForm:false,
};
const  SystemCategoriesReducer =(state=INIT_STATE,action)=>{
    switch (action.type) {
        case FETCH_SYSTEM_CATEGORIES_SUCCESS:
            return {
                ...state,
                systemCategoriesByID:action.payload
            };
        case ADD_SYSTEM_CATEGORIES_SUCCESS:
        case EDIT_SYSTEM_CATEGORIES_SUCCESS:
            let categories ={...state.systemCategoriesByID};
            categories[action.payload.id] =action.payload;
            return {
                ...state,
                systemCategoriesByID:categories
            };
        case SHOW_CREATE_SYSTEM_CATEGORIES_FORM:
            return {
                ...state,
                showSystemCategoryCreateForm:true
            };
        case HIDE_CREATE_SYSTEM_CATEGORIES_FORM:
            return {
                ...state,
                showSystemCategoryCreateForm:false
            };
        case SHOW_EDIT_SYSTEM_CATEGORIES_FORM:
            return {
                ...state,
                showSystemCategoryEditForm:true
            };
        case HIDE_EDIT_SYSTEM_CATEGORIES_FORM:
            return {
                ...state,
                showSystemCategoryCreateForm:false
            };

        default:
            return{...state}
    }
};
export default SystemCategoriesReducer;