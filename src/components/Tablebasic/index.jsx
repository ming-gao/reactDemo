import React, {Component} from 'react';
import { Table, Tag, Space } from 'antd';
import './Tablebasic.styl'

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        name: 'John Brown',
        ip: 32,
        date: '2021/01/01',
        type: 'New York No. 1 Lake Park',
    },
    {
        key: '2',
        name: 'Jim Green',
        ip: 42,
        date: '2021/01/01',
        type: 'London No. 1 Lake Park',
    },
    {
        key: '3',
        name: 'Joe Black',
        ip: 32,
        date: '2021/01/01',
        type: 'Sidney No. 1 Lake Park',
    },
    {
        key: '4',
        name: 'Joe Black',
        ip: 32,
        date: '2021/01/01',
        type: 'Sidney No. 1 Lake Park',
    },
];

const total=data.length;

class Tablebasic extends Component {
    total=total;
    tablePagination={
        size:'small',
        defaultPageSize:3,
        showQuickJumper:true,
        showTotal:(total, range) => `第${range[0]}-${range[1]}项  共${this.total}项`
    }
    render() {
        return (
            <Table className="M-table" pagination={this.tablePagination} dataSource={data}>
                <Column title="用户名称" dataIndex="name" key="name"/>
                <Column title="IP" dataIndex="ip" key="ip" />
                <Column title="时间" dataIndex="date" key="date" />
                <Column title="类型" dataIndex="type" key="type"/>
                <Column
                    title="动作"
                    key="action"
                    render={(text, record) => (
                        <Space size="middle">
                            <a>Invite {record.lastName}</a>
                            <a>Delete</a>
                        </Space>
                    )}
                />
            </Table>
        );
    }
}

export default Tablebasic;
