import React from 'react';
import Blogs from "../components/Blogs";
import {connect} from "react-redux";
import {showBlogCategoryCreateFormGenerator} from "../appRedux/actions/General/BlogCategoryActions";
import CreateBlogCategory from "../components/Blogs/createBlogCategory";

class BlogContainer extends React.Component{
    handleCreateForm =()=>{
      this.props.showBlogCategoryCreateFormGenerator();
    };
    render() {
        const{showBlogCategoryCreateForm}=this.props;
        return(
            <div className={'container'}>
                <h2>
                Blog Categories <button type="button" className="btn btn-info btn-sm" data-toggle="modal" onClick={this.handleCreateForm}>
                  +
                </button>
                </h2>
                <Blogs/>
                {showBlogCategoryCreateForm && <CreateBlogCategory />}
            </div>
        );
    }
}
const mapStateToProps =({blogCategory})=>{
    const {showBlogCategoryCreateForm}=blogCategory;
    return {showBlogCategoryCreateForm};
};
export default connect(mapStateToProps,{showBlogCategoryCreateFormGenerator})(BlogContainer);