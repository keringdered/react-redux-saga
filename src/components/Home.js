    import React, { Component } from "react";

    class Home extends Component {
      render() {
        return (
          <div className="container">
            <h2>HELLO</h2>
            <p>Cras facilisis urna ornare ex volutpat, et
            convallis erat elementum. Ut aliquam, ipsum vitae
            gravida suscipit, metus dui bibendum est, eget rhoncus nibh
            metus nec massa. Maecenas hendrerit laoreet augue
            nec molestie. Cum sociis natoque penatibus et magnis
            dis parturient montes, nascetur ridiculus mus.</p>

            <p>Duis a turpis sed lacus dapibus elementum sed eu lectus.</p>
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

    export default Home;