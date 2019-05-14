import {FETCH_BLOG_CATEGORIES, FETCH_BLOG_CATEGORIES_SUCCESS} from "../../actions/General/BlogCategoryActions";

const INIT_STATE={
   blogCategoriesByID:{},
    blogCategoryToUpdate:{},
    blogCategoryToDelete:{},
};
const  BlogCategoriesReducer =(state=INIT_STATE,action)=>{
    switch (action.type) {
        case FETCH_BLOG_CATEGORIES:
            return {
              ...state,
            };
        case FETCH_BLOG_CATEGORIES_SUCCESS:
            return {

            };

        default:
            return{...state}
    }
};
export default BlogCategoriesReducer;