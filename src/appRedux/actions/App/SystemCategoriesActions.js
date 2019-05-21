
////create
export const ADD_SYSTEM_CATEGORIES = 'ADD_SYSTEM_CATEGORIES';
export const ADD_SYSTEM_CATEGORIES_SUCCESS = 'ADD_SYSTEM_CATEGORIES_SUCCESS';
export const SHOW_CREATE_SYSTEM_CATEGORIES_FORM = 'SHOW_CREATE_SYSTEM_CATEGORIES_FORM';
export const HIDE_CREATE_SYSTEM_CATEGORIES_FORM = 'HIDE_CREATE_SYSTEM_CATEGORIES_FORM';
/// fetch
export const FETCH_SYSTEM_CATEGORIES = 'FETCH_SYSTEM_CATEGORIES';
export const FETCH_SYSTEM_CATEGORIES_SUCCESS = 'FETCH_SYSTEM_CATEGORIES_SUCCESS';
// ////edit
export const EDIT_SYSTEM_CATEGORIES = 'EDIT_SYSTEM_CATEGORIES';
export const EDIT_SYSTEM_CATEGORIES_SUCCESS = 'EDIT_SYSTEM_CATEGORIES_SUCCESS';
export const SHOW_EDIT_SYSTEM_CATEGORIES_FORM = 'SHOW_EDIT_SYSTEM_CATEGORIES_FORM';
export const HIDE_EDIT_SYSTEM_CATEGORIES_FORM = 'HIDE_EDIT_SYSTEM_CATEGORIES_FORM';
// ////delete
export const DELETE_SYSTEM_CATEGORIES = 'DELETE_SYSTEM_CATEGORIES';
export const DELETE_SYSTEM_CATEGORIES_SUCCESS ='DELETE_SYSTEM_CATEGORIES_SUCCESS';
export const SHOW_DELETE_SYSTEM_CATEGORIES_MODAL = 'SHOW_DELETE_SYSTEM_CATEGORIES_MODAL';
export const HIDE_DELETE_SYSTEM_CATEGORIES_MODAL = 'HIDE_DELETE_SYSTEM_CATEGORIES_MODAL';
////activate
export const SHOW_DEACTIVATE_SYSTEM_CATEGORY_FORM = 'SHOW_DEACTIVATE_SYSTEM_CATEGORY_FORM';
export const HIDE_DEACTIVATE_SYSTEM_CATEGORY_FORM = 'HIDE_DEACTIVATE_SYSTEM_CATEGORY_FORM';
////deactivate
export const SHOW_ACTIVATE_SYSTEM_CATEGORY_FORM = 'SHOW_ACTIVATE_SYSTEM_CATEGORY_FORM';
export const HIDE_ACTIVATE_SYSTEM_CATEGORY_FORM = 'HIDE_ACTIVATE_SYSTEM_CATEGORY_FORM';
/////CREATE
export const addSystemCategoryGenerator = (data)=>{
    return {
        type:ADD_SYSTEM_CATEGORIES ,
        payload: data
    }
};
export const showSystemCategoryCreateFormGenerator = (data)=>{
    return {
        type:SHOW_CREATE_SYSTEM_CATEGORIES_FORM,
        payload:data
    }
};
export const hideSystemCategoryCreateFormGenerator = (data)=>{
    return {
        type:HIDE_CREATE_SYSTEM_CATEGORIES_FORM,
        payload:data
    }
};
export const addSystemCategorySuccessGenerator =(data)=>{
    return {
        type:ADD_SYSTEM_CATEGORIES_SUCCESS,
        payload:data
    }
};
//////FETCH
export const fetchSystemCategoryGenerator=(data=[])=>{
    return {
        type:FETCH_SYSTEM_CATEGORIES,
        payload:data
    }
};

export const fetchSystemCategorySuccessGenerator =(data)=>{
    return {
        type:FETCH_SYSTEM_CATEGORIES_SUCCESS,
        payload:data
    }
};


///EDIT
export const editSystemCategoryGenerator = (data)=>{
    return {
        type: EDIT_SYSTEM_CATEGORIES,
        payload: data
    }
};

export const editSystemCategorySuccessGenerator=(data)=>{
    return {
        type:EDIT_SYSTEM_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showSystemCategoryEditFormGenerator = (data)=>{
    return {
        type:SHOW_EDIT_SYSTEM_CATEGORIES_FORM,
        payload:data
    }
};
export const hideSystemCategoryEditFormGenerator = (data)=>{
    return {
        type:HIDE_EDIT_SYSTEM_CATEGORIES_FORM,
        payload:data
    }
};
// /////DELETE
export const deleteSystemCategoryGenerator=(data)=>{
    return {
        type:DELETE_SYSTEM_CATEGORIES,
        payload:data
    }
};

export const deleteSystemCategorySuccessGenerator = (data)=>{
    return {
        type:DELETE_SYSTEM_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showSystemCategoryDeleteModalGenerator = (data)=>{
    return {
        type:SHOW_DELETE_SYSTEM_CATEGORIES_MODAL,
        payload:data
    }
};
export const hideSystemCategoryDeleteModalGenerator = (data)=>{
    return {
        type:HIDE_DELETE_SYSTEM_CATEGORIES_MODAL,
        payload:data
    }
};
export const showDeactivateSystemCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_DEACTIVATE_SYSTEM_CATEGORY_FORM,
        payload:data
    }
};
export const hideDeactivateSystemCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_DEACTIVATE_SYSTEM_CATEGORY_FORM,
        payload:data
    }
};
export const showActivateSystemCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_ACTIVATE_SYSTEM_CATEGORY_FORM,
        payload:data
    }
};
export const hideActivateSystemCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_ACTIVATE_SYSTEM_CATEGORY_FORM,
        payload:data
    }
};
