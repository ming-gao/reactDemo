import React, {Component} from 'react';
import { Table } from "antd";

import './TableTest.css'

class TableTest extends Component {
    state = {
        total: 0
    }

    componentDidMount() {
        console.log(this.props.dataSource)
    }

    getRow=(e)=>{
        // this.props.getRow(record, selected, selectedRows, nativeEvent)
        console.log('选中行', e)
    }
    render() {
        const {columns, dataSource,loading} = this.props
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
            <Table columns={columns} dataSource={dataSource} onSelect={(e)=>this.getRow(e)} loading={loading} bordered scroll={{y: 340}}
                   rowClassName={(record, index) => {
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
