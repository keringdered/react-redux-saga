import {
    ADD_SUB_CATEGORIES_SUCCESS,
    EDIT_SUB_CATEGORIES_SUCCESS,
    FETCH_SUB_CATEGORIES_SUCCESS,
    HIDE_CREATE_SUB_CATEGORIES_FORM, HIDE_EDIT_SUB_CATEGORIES_FORM,
    SHOW_CREATE_SUB_CATEGORIES_FORM,
    SHOW_EDIT_SUB_CATEGORIES_FORM
} from "../../actions/App/SubCategoryActions";


const INIT_STATE={
    subCategoriesByID:{},
    subCategoryToUpdate:{},
    subCategoryToDelete:{},
    showSubCategoryCreateForm:false,
    showSubCategoryEditForm:false,
    showSubCategoryDeleteForm:false,
};
const  SubCategoryReducer =(state=INIT_STATE, action)=>{
    switch (action.type) {
        case FETCH_SUB_CATEGORIES_SUCCESS:
            return {
                ...state,
                subCategoriesByID:action.payload
            };
        case ADD_SUB_CATEGORIES_SUCCESS:
        case EDIT_SUB_CATEGORIES_SUCCESS:
            let categories ={...state.subCategoriesByID};
            categories[action.payload.id] =action.payload;
            return {
                ...state,
                subCategoriesByID:categories
            };
        case SHOW_CREATE_SUB_CATEGORIES_FORM:
            return {
                ...state,
                showSubCategoryCreateForm:true
            };
        case HIDE_CREATE_SUB_CATEGORIES_FORM:
            return {
                ...state,
                showSubCategoryCreateForm:false
            };
        case SHOW_EDIT_SUB_CATEGORIES_FORM:
            return {
                ...state,
                showSubCategoryEditForm:true
            };
        case HIDE_EDIT_SUB_CATEGORIES_FORM:
            return {
                ...state,
                showSubCategoryCreateForm:false
            };

        default:
            return{...state}
    }
};
export default SubCategoryReducer;