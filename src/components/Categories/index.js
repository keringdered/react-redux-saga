import React from 'react';
import {connect} from "react-redux";
import {fetchSystemCategoryGenerator} from "../../appRedux/actions/App/SystemCategoriesActions";
import {Link, NavLink} from "react-router-dom";
import {Helpers} from "../../Utilities/Helpers";

class Categories extends React.Component{
    componentDidMount() {
        this.props.fetchSystemCategoryGenerator();
    }
    render() {
        const data = Object.values(this.props.systemCategoriesByID);
        const categories = data && data.map((datum)=>{
            return(
                <div className="col-sm-12 col-md-4 col-lg-4" key={datum.id}>
                    <div className="card">
                        <div className="card-header">{datum.name}({datum.sub_categories.length})</div>
                        <div className="card-body">
                            <ol>
                                {datum.sub_categories.map(sub=>{
                                    return(
                                        <li key={sub.id}>
                                            <Link key={sub.id} to={'/all-categories/'+sub.id+'/'+Helpers.replaceSpaceWithHyphen(sub.name)}>
                                                {sub.name}({Object.values(sub.systems).length})
                                            </Link>
                                        </li>
                                    )
                                })}
                            </ol>
                        </div>
                    </div>
                </div>
            );
        });
        return(
            <div className="container">
                <div className={'row'}>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="well well-sm">
                            <h2>System Categories</h2>
                            <br/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    {
                        categories
                    }
                </div>
            </div>
        );
    }
}
const mapStateToProps =({systemCategory})=>{
    const {systemCategoriesByID}=systemCategory;
    return {systemCategoriesByID}
};
export default connect(mapStateToProps,{fetchSystemCategoryGenerator})(Categories);