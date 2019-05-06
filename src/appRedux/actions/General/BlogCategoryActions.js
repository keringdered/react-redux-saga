
////create
export const ADD_BLOG_CATEGORIES = 'ADD_BLOG_CATEGORIES';
export const ADD_BLOG_CATEGORIES_SUCCESS = 'ADD_BLOG_CATEGORIES_SUCCESS';
export const SHOW_CREATE_BLOG_CATEGORIES_FORM = 'SHOW_CREATE_BLOG_CATEGORIES_FORM';
export const HIDE_CREATE_BLOG_CATEGORIES_FORM = 'HIDE_CREATE_BLOG_CATEGORIES_FORM';
/// fetch
export const FETCH_BLOG_CATEGORIES = 'FETCH_BLOG_CATEGORIES';
export const FETCH_BLOG_CATEGORIES_SUCCESS = 'FETCH_BLOG_CATEGORIES_SUCCESS';
// ////edit
export const EDIT_BLOG_CATEGORIES = 'EDIT_BLOG_CATEGORIES';
export const EDIT_BLOG_CATEGORIES_SUCCESS = 'EDIT_BLOG_CATEGORIES_SUCCESS';
export const SHOW_EDIT_BLOG_CATEGORIES_FORM = 'SHOW_EDIT_BLOG_CATEGORIES_FORM';
export const HIDE_EDIT_BLOG_CATEGORIES_FORM = 'HIDE_EDIT_BLOG_CATEGORIES_FORM';
// ////delete
export const DELETE_BLOG_CATEGORIES = 'DELETE_BLOG_CATEGORIES';
export const DELETE_BLOG_CATEGORIES_SUCCESS ='DELETE_BLOG_CATEGORIES_SUCCESS';
export const SHOW_DELETE_BLOG_CATEGORIES_MODAL = 'SHOW_DELETE_BLOG_CATEGORIES_MODAL';
export const HIDE_DELETE_BLOG_CATEGORIES_MODAL = 'HIDE_DELETE_BLOG_CATEGORIES_MODAL';
////activate
export const SHOW_DEACTIVATE_BLOG_CATEGORY_FORM = 'SHOW_DEACTIVATE_BLOG_CATEGORY_FORM';
export const HIDE_DEACTIVATE_BLOG_CATEGORY_FORM = 'HIDE_DEACTIVATE_BLOG_CATEGORY_FORM';
////deactivate
export const SHOW_ACTIVATE_BLOG_CATEGORY_FORM = 'SHOW_ACTIVATE_BLOG_CATEGORY_FORM';
export const HIDE_ACTIVATE_BLOG_CATEGORY_FORM = 'HIDE_ACTIVATE_BLOG_CATEGORY_FORM';
/////CREATE
export const addBlogCategoryGenerator = (data)=>{
    return {
        type:ADD_BLOG_CATEGORIES ,
        payload: data
    }
};
export const showBlogCategoryCreateFormGenerator = (data)=>{
    return {
        type:SHOW_CREATE_BLOG_CATEGORIES_FORM,
        payload:data
    }
};
export const hideBlogCategoryCreateFormGenerator = (data)=>{
    return {
        type:HIDE_CREATE_BLOG_CATEGORIES_FORM,
        payload:data
    }
};
export const addBlogCategorySuccessGenerator =(data)=>{
    return {
        type:ADD_BLOG_CATEGORIES_SUCCESS,
        payload:data
    }
};
//////FETCH
export const fetchBlogCategoryGenerator=(data=[])=>{
    return {
        type:FETCH_BLOG_CATEGORIES,
        payload:data
    }
};

export const fetchBlogCategorySuccessGenerator =(data)=>{
    return {
        type:FETCH_BLOG_CATEGORIES_SUCCESS,
        payload:data
    }
};


///EDIT
export const editBlogCategoryGenerator = (data)=>{
    return {
        type: EDIT_BLOG_CATEGORIES,
        payload: data
    }
};

export const editBlogCategorySuccessGenerator=(data)=>{
    return {
        type:EDIT_BLOG_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showBlogCategoryEditFormGenerator = (data)=>{
    return {
        type:SHOW_EDIT_BLOG_CATEGORIES_FORM,
        payload:data
    }
};
export const hideBlogCategoryEditFormGenerator = (data)=>{
    return {
        type:HIDE_EDIT_BLOG_CATEGORIES_FORM,
        payload:data
    }
};
// /////DELETE
export const deleteBlogCategoryGenerator=(data)=>{
    return {
        type:DELETE_BLOG_CATEGORIES,
        payload:data
    }
};

export const deleteBlogCategorySuccessGenerator = (data)=>{
    return {
        type:DELETE_BLOG_CATEGORIES_SUCCESS,
        payload:data
    }
};
export const showBlogCategoryDeleteModalGenerator = (data)=>{
    return {
        type:SHOW_DELETE_BLOG_CATEGORIES_MODAL,
        payload:data
    }
};
export const hideBlogCategoryDeleteModalGenerator = (data)=>{
    return {
        type:HIDE_DELETE_BLOG_CATEGORIES_MODAL,
        payload:data
    }
};
export const showDeactivateBlogCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_DEACTIVATE_BLOG_CATEGORY_FORM,
        payload:data
    }
};
export const hideDeactivateBlogCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_DEACTIVATE_BLOG_CATEGORY_FORM,
        payload:data
    }
};
export const showActivateBlogCategoryModalGenerator = (data) =>{
    return {
        type:SHOW_ACTIVATE_BLOG_CATEGORY_FORM,
        payload:data
    }
};
export const hideActivateBlogCategoryModalGenerator = (data) =>{
    return {
        type:HIDE_ACTIVATE_BLOG_CATEGORY_FORM,
        payload:data
    }
};
