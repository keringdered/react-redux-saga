import React from 'react';

class Categories extends React.Component{
    render() {
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
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="card-header">Header</div>
                            <div className="card-body">Content</div>
                            <div className="card-footer">Footer</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="card-header">Header</div>
                            <div className="card-body">Content</div>
                            <div className="card-footer">Footer</div>
                        </div>
                    </div>
                    <div className="col-sm-12 col-md-4 col-lg-4">
                        <div className="card">
                            <div className="card-header">Header</div>
                            <div className="card-body">Content</div>
                            <div className="card-footer">Footer</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Categories;