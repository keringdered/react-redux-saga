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
        return(
            <div className="container">
                <h2>Blogs Blogs Blogs Blogs</h2>
                <p>The easiest thing to do is post on
                    our <a href="http://forum.kirupa.com">forums</a>.
                </p>
            </div>
        );
    }
}
const mapStateToProps=({blogCategory})=>{
    const {blogCategoriesByID}  = blogCategory; 
    return {blogCategoriesByID}
};
export default connect(mapStateToProps,{fetchBlogCategoryGenerator})(Blogs);