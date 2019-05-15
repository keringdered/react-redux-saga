import React from 'react';
import {connect} from "react-redux";
import {Modal, Button} from 'react-bootstrap'
import {hideBlogCategoryCreateFormGenerator,addBlogCategoryGenerator} from "../../appRedux/actions/General/BlogCategoryActions";

class CreateBlogCategory extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            name:''
        }
    }
    updateState =(e)=>{
        /*const{id,name,value}=e.target;
        const key = id||name;
        let newState =this.state;
        newState[key]=value;*/
        this.setState({
           name:e.target.value
        });
    };
    handleSubmit =()=>{
        console.log(this.state);
        this.props.addBlogCategoryGenerator(this.state);
        this.props.hideBlogCategoryCreateFormGenerator();
    };

    render() {
        return(
            <div className={'container'}>
                <Modal show={this.props.showBlogCategoryCreateForm} onHide={this.props.hideBlogCategoryCreateFormGenerator}>
                    <Modal.Header closeButton>
                        <Modal.Title>New Modal</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className={'row'}>
                            <div className={'col-sm-12'}>
                                <input
                                    id={'name'}
                                    type={'text'}
                                    placeholder={'Category Name'}
                                    onChange={this.updateState}
                                    className={'form-control'}
                                />
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.hideBlogCategoryCreateFormGenerator}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={this.handleSubmit}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        )
    }

}
const mapStateToProps =({blogCategory})=>{
    const {showBlogCategoryCreateForm}=blogCategory;
    return {showBlogCategoryCreateForm};
};
export default connect(mapStateToProps,{hideBlogCategoryCreateFormGenerator,addBlogCategoryGenerator})(CreateBlogCategory);