import React, { Component } from 'react';
import Table from "./common/Table";
import { textFilter } from 'react-bootstrap-table2-filter';
class Stuff extends Component {
    state = {
        products: [
            {
                id: 1,
                name: 'TV',
                'price': 1000
            },
            {
                id: 2,
                name: 'Mobile',
                'price': 500
            },
            {
                id: 3,
                name: 'Book',
                'price': 20
            },
        ],
        columns: [
            {
                dataField: 'id',
                text: 'Product ID',
                sort:true,
                filter:textFilter()
            },
            {
                dataField: 'name',
                text: 'Product Name',
                sort:true,
                filter:textFilter(),
                sortCaret: (order, column) => {
                    return order; //...
                }
            },
            {
                dataField: 'price',
                text: 'Product Price',
                sort: true,
                filter:textFilter()
            },
            {
                dataField:'Actions',
                text:"Actions",
                render:function () {
                    return 'actions';
                }
            }
            ]
    };
    render() {
    return (
      <div className="container">
        <h2>STUFF</h2>
        <p>Mauris sem velit, vehicula eget sodales vitae,
        rhoncus eget sapien:</p>
        <ol>
          <li>Nulla pulvinar diam</li>
          <li>Facilisis bibendum</li>
          <li>Vestibulum vulputate</li>
          <li>Eget erat</li>
          <li>Id porttitor</li>
        </ol>
          <Table
              keyField='id'
              data={ this.state.products }
              columns={ this.state.columns } />
      </div>
    );
  }
}
export default Stuff;