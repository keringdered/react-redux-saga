import {
    EDIT_BLOG_CATEGORIES_SUCCESS,
    ADD_BLOG_CATEGORIES_SUCCESS,
    FETCH_BLOG_CATEGORIES_SUCCESS,
    SHOW_CREATE_BLOG_CATEGORIES_FORM,
    HIDE_CREATE_BLOG_CATEGORIES_FORM,
    SHOW_EDIT_BLOG_CATEGORIES_FORM, HIDE_EDIT_BLOG_CATEGORIES_FORM
} from "../../actions/General/BlogCategoryActions";

const INIT_STATE={
    blogCategoriesByID:{},
    blogCategoryToUpdate:{},
    blogCategoryToDelete:{},
    showBlogCategoryCreateForm:false,
    showBlogCategoryEditForm:false,
    showBlogCategoryDeleteForm:false,
};
const  BlogCategoriesReducer =(state=INIT_STATE,action)=>{
    switch (action.type) {
        case FETCH_BLOG_CATEGORIES_SUCCESS:
            return {
                ...state,
                blogCategoriesByID:action.payload
            };
        case ADD_BLOG_CATEGORIES_SUCCESS:
        case EDIT_BLOG_CATEGORIES_SUCCESS:
            let categories ={...state.blogCategoriesByID};
            categories[action.payload.id] =action.payload;
            return {
                ...state,
                blogCategoriesByID:categories
            };
        case SHOW_CREATE_BLOG_CATEGORIES_FORM:
            return {
                ...state,
                showBlogCategoryCreateForm:true
            };
        case HIDE_CREATE_BLOG_CATEGORIES_FORM:
            return {
                ...state,
                showBlogCategoryCreateForm:false
            };
        case SHOW_EDIT_BLOG_CATEGORIES_FORM:
            return {
                ...state,
                showBlogCategoryEditForm:true
            };
        case HIDE_EDIT_BLOG_CATEGORIES_FORM:
            return {
                ...state,
                showBlogCategoryCreateForm:false
            };

        default:
            return{...state}
    }
};
export default BlogCategoriesReducer;