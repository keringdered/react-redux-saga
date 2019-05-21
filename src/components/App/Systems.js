import React from "react";
import {connect} from "react-redux";
import {fetchSystemCategoryGenerator} from "../../appRedux/actions/App/SystemCategoriesActions";
import {Helpers} from "../../Utilities/Helpers";
import {fetchSubCategoryGenerator} from "../../appRedux/actions/App/SubCategoryActions";

class Systems extends  React.Component{

    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.fetchSystemCategoryGenerator();
        this.props.fetchSubCategoryGenerator();
    }

    render() {
        const systemsSubCategory = Helpers.recordFromIndexedData(this.props.subCategoriesByID,this.props.match.params.id);

        const systems = systemsSubCategory.systems ?[] : systemsSubCategory.systems && Object.values( systemsSubCategory.systems);
        const systemData = [];
        return(
            <div>
                {
                    systems && systems.length === 0 ?'No Systems in this category ': systemData
                }
            </div>
        )
    }
}
const mapStateToProps =({systemCategory,subCategory})=>{
   const {systemCategoriesByID} = systemCategory;
   const {subCategoriesByID} = subCategory;
    return {systemCategoriesByID,subCategoriesByID};
};
export default  connect(mapStateToProps,{fetchSystemCategoryGenerator,fetchSubCategoryGenerator})(Systems);