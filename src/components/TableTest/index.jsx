import React, {Component} from 'react';
import { BaseTable } from 'ali-react-table'
import {Button, Popconfirm, Pagination } from "antd";
import {Router, Route, Link} from 'react-router-dom'


import './TableTest.css'

class TableTest extends Component {
    state = {
        total:0
    }
    componentDidMount() {
        console.log(this.props.dataSource)
    }

    render() {
        return (
            <div>
                <BaseTable dataSource={this.props.dataSource} columns={this.props.columns} />
                <Pagination
                    total={this.props.dataSource.length}
                    showTotal={(total, range) => `第${range[0]} - ${range[1]}页 共 ${total} 项`}
                    defaultPageSize={10}
                    defaultCurrent={1}
                    size="small"
                />
            </div>
        );
    }
}

export default TableTest;
