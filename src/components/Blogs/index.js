import React from 'react';
import {connect} from "react-redux";
import {fetchBlogCategoryGenerator} from "../../appRedux/actions/General/BlogCategoryActions";
class Blogs extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchBlogCategoryGenerator();
    }

    render() {
        const list =
            Object.values(this.props.blogCategoriesByID).map((category,index)=>{
                return(
                    <li key={category.id}>{category.name}</li>
                )

            });
        return(
            <div className="container">

                <ol>
                    {
                        list
                    }
                </ol>
            </div>
        );
    }
}
const mapStateToProps=({blogCategory})=>{
    const {blogCategoriesByID}  = blogCategory; 
    return {blogCategoriesByID}
};
export default connect(mapStateToProps,{fetchBlogCategoryGenerator})(Blogs);