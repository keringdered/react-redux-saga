import {
    EDIT_BLOG_CATEGORIES_SUCCESS,
    ADD_BLOG_CATEGORIES_SUCCESS,
    FETCH_BLOG_CATEGORIES_SUCCESS
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

        default:
            return{...state}
    }
};
export default BlogCategoriesReducer;