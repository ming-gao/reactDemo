import React, {Component} from 'react';
import {Button, Popconfirm, Pagination, Table, Tag, Space} from "antd";
import {Router, Route, Link} from 'react-router-dom'

import './TableTest.css'

class TableTest extends Component {
    state = {
        total: 0
    }

    componentDidMount() {
        console.log(this.props.dataSource)
    }

    render() {
        const {columns, dataSource} = this.props
        const pagination = {
            total: dataSource.length,
            showTotal: ((total, range) => `第${range[0]} - ${range[1]}项记录 共 ${total} 项记录`),
            defaultPageSize: 10,
            defaultCurrent: 1,
            showSizeChanger: true,
            pageSizeOptions: [5, 10, 20, 50],
            size: 'small'
        }

        return (
            <Table columns={columns} dataSource={dataSource} bordered scroll={{ y: 340 }} rowClassName={(record, index) => {
                let className = 'odd'
                if (index % 2 === 1) className = 'even'
                return className
            }} pagination={pagination}
                   rowSelection={{
                       type: 'checkbox',
                   }}
            />
        );
    }
}

export default TableTest;
