import React from 'react';
import Categories from "../components/Categories";
import {connect} from "react-redux";
import {

    showSystemCategoryCreateFormGenerator
} from "../appRedux/actions/App/SystemCategoriesActions";

class CategoryContainer extends React.Component{

    render() {
        return(
            <Categories/>
        );
    }
}
const mapStateToProps =({systemCategory})=>{
    const {showSystemCategoryCreateForm}=systemCategory;
    return {showSystemCategoryCreateForm};
};
export default connect(mapStateToProps,{showSystemCategoryCreateFormGenerator})(CategoryContainer);