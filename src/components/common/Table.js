import React, { Component } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import BootstrapTable from 'react-bootstrap-table-next';
import filterFactory from 'react-bootstrap-table2-filter';
import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';
import paginationFactory from 'react-bootstrap-table2-paginator';
class Table extends Component{
    constructor(props){
        super(props);
        this.state={
            data:this.props.data||[],
            columns:this.props.columns||[],
            responsive:true
        }
    }
    render() {
        const{ data,columns,responsive}=this.state;
        const { SearchBar } = Search;
        const { ExportCSVButton } = CSVExport;
        return(<div className={'container'}>
            <ToolkitProvider
                keyField="id"
                data={ data }
                columns={ columns }
                search
                responsive={responsive}
                exportCSV
            >
                {
                    props => (
                        <div>
                            <h3>Input something at below input field:</h3>
                            <SearchBar { ...props.searchProps } />
                            <ExportCSVButton { ...props.csvProps }><span className={'btn btn-md btn-success'}>Export CSV</span></ExportCSVButton>
                            <hr />
                            <BootstrapTable
                                { ...props.baseProps }
                            />
                        </div>
                    )
                }
            </ToolkitProvider>

        </div>)
    }

}
export default Table;