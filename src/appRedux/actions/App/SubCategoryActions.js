
////create
export const ADD_SUB_CATEGORIES = 'ADD_SUB_CATEGORIES';
export const ADD_SUB_CATEGORIES_SUCCESS = 'ADD_SUB_CATEGORIES_SUCCESS';
export const SHOW_CREATE_SUB_CATEGORIES_FORM = 'SHOW_CREATE_SUB_CATEGORIES_FORM';
export const HIDE_CREATE_SUB_CATEGORIES_FORM = 'HIDE_CREATE_SUB_CATEGORIES_FORM';
/// fetch
export const FETCH_SUB_CATEGORIES = 'FETCH_SUB_CATEGORIES';
export const FETCH_SUB_CATEGORIES_SUCCESS = 'FETCH_SUB_CATEGORIES_SUCCESS';
// ////edit
export const EDIT_SUB_CATEGORIES = 'EDIT_SUB_CATEGORIES';
export const EDIT_SUB_CATEGORIES_SUCCESS = 'EDIT_SUB_CATEGORIES_SUCCESS';
export const SHOW_EDIT_SUB_CATEGORIES_FORM = 'SHOW_EDIT_SUB_CATEGORIES_FORM';
export const HIDE_EDIT_SUB_CATEGORIES_FORM = 'HIDE_EDIT_SUB_CATEGORIES_FORM';
// ////delete
export const DELETE_SUB_CATEGORIES = 'DELETE_SUB_CATEGORIES';
export const DELETE_SUB_CATEGORIES_SUCCESS ='DELETE_SUB_CATEGORIES_SUCCESS';
export const SHOW_DELETE_SUB_CATEGORIES_MODAL = 'SHOW_DELETE_SUB_CATEGORIES_MODAL';
export const HIDE_DELETE_SUB_CATEGORIES_MODAL = 'HIDE_DELETE_SUB_CATEGORIES_MODAL';
////activate
export const SHOW_DEACTIVATE_SUB_CATEGORY_FORM = 'SHOW_DEACTIVATE_SUB_CATEGORY_FORM';
export const HIDE_DEACTIVATE_SUB_CATEGORY_FORM = 'HIDE_DEACTIVATE_SUB_CATEGORY_FORM';
////deactivate
export const SHOW_ACTIVATE_SUB_CATEGORY_FORM = 'SHOW_ACTIVATE_SUB_CATEGORY_FORM';
export const HIDE_ACTIVATE_SUB_CATEGORY_FORM = 'HIDE_ACTIVATE_SUB_CATEGORY_FORM';
/////CREATE
export const addSubCategoryGenerator = (data)=>{
    return {
        type:ADD_SUB_CATEGORIES ,
        payload: data
    }
};
export const showSubCategoryCreateFormGenerator = (data)=>{
    return {
        type:SHOW_CREATE_SUB_CATEGORIES_FORM,
        payload:data
    }
};
export const hideSubCategoryCreateFormGenerator = (data)=>{
    return {
        type:HIDE_CREATE_SUB_CATEGORIES_FORM,
        payload:data
    }
};
export const addSubCategorySuccessGenerator =(data)=>{
    return {
        type:ADD_SUB_CATEGORIES_SUCCESS,
        payload:data
    }
};
//////FETCH
export const fetchSubCategoryGenerator=(data=[])=>{
    return {
        type:FETCH_SUB_CATEGORIES,
        payload:data
    }
};

export const fetchSubCategorySuccessGenerator =(data)=>{
    return {
        type:FETCH_SUB_CATEGORIES_SUCCESS,
        payload:data
    }
};


///EDIT
export const editSubCategoryGenerator = (data)=>{
    return {
        type: EDIT_SUB_CATEGORIES,
        payload: data
    }
};

export const editSubCategorySuccessGenerator=(data)=>{
    return {
        type:EDIT_SUB_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showSubCategoryEditFormGenerator = (data)=>{
    return {
        type:SHOW_EDIT_SUB_CATEGORIES_FORM,
        payload:data
    }
};
export const hideSubCategoryEditFormGenerator = (data)=>{
    return {
        type:HIDE_EDIT_SUB_CATEGORIES_FORM,
        payload:data
    }
};
// /////DELETE
export const deleteSubCategoryGenerator=(data)=>{
    return {
        type:DELETE_SUB_CATEGORIES,
        payload:data
    }
};

export const deleteSubCategorySuccessGenerator = (data)=>{
    return {
        type:DELETE_SUB_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showSubCategoryDeleteModalGenerator = (data)=>{
    return {
        type:SHOW_DELETE_SUB_CATEGORIES_MODAL,
        payload:data
    }
};
export const hideSubCategoryDeleteModalGenerator = (data)=>{
    return {
        type:HIDE_DELETE_SUB_CATEGORIES_MODAL,
        payload:data
    }
};
export const showDeactivateSubCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_DEACTIVATE_SUB_CATEGORY_FORM,
        payload:data
    }
};
export const hideDeactivateSubCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_DEACTIVATE_SUB_CATEGORY_FORM,
        payload:data
    }
};
export const showActivateSubCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_ACTIVATE_SUB_CATEGORY_FORM,
        payload:data
    }
};
export const hideActivateSubCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_ACTIVATE_SUB_CATEGORY_FORM,
        payload:data
    }
};
