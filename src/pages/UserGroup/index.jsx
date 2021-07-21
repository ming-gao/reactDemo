import React, {Component} from 'react';
import ConditionalSearch from '../../components/ConditionalSearch'
import {Layout, Button, message, Popconfirm} from "antd";
import {Link} from "react-router-dom";
import {
    DeleteOutlined, EditOutlined, EyeOutlined, KeyOutlined, PlayCircleOutlined,
    PlusOutlined, ToolOutlined, VideoCameraOutlined,
} from "@ant-design/icons";
import {getGroupTable} from '../../api/user'

import NewTree from '../../components/NewTree'
import TableTest from "../../components/TableTest";

import './usergroup.less'

const {Sider, Content} = Layout;

const columns = [
    {title: 'userName', dataIndex: 'userName', key: 'userName',},
    {title: 'description', dataIndex: 'description', key: 'description',},
    {
        title: 'action',
        dataIndex: 'action',
        key: 'action',
        render: (_, record) =>
            (
                <div>
                    <Link to='/user'>
                        <EditOutlined style={{fontSize: 18}}/>
                    </Link>
                    <Link to='/adduser'>
                        <EyeOutlined style={{fontSize: 18}}/>
                    </Link>
                    <Link to='/user'>
                        <KeyOutlined style={{fontSize: 18}}/>
                    </Link>
                </div>
            ),
        width: 180
    },
]

class UserGroup extends Component {
    state = {
        selectedRowKeys: [],
        loading: false,
        dataSource: []
    }
    addColumn = (column) => {
        this.setState({column})
    }
    auth = () => {
        if (this.state.selectedRowKeys.length === 0) {
            message.warning('请选择要操作的对象');
        }
    }
    config = () => {
        if (this.state.selectedRowKeys.length === 0) {
            message.warning('请选择要操作的对象');
        }
    }

    componentDidMount() {
        getGroupTable().then(res => {
            this.setState({dataSource: res.data.list})
        })
    }

    render() {
        const {loading, selectedRowKeys, dataSource} = this.state;
        const hasSelected = selectedRowKeys.length > 1;
        return (
            <Layout className="M-usergroup">
                <Sider><NewTree/></Sider>
                <Content>
                    <div className='tableTitle'>
                        <Button type="primary" size="small" onClick={this.addColumn} icon={<PlusOutlined/>}
                                style={{backgroundColor: '#84C93C'}}><Link to='/addPage/'>添加</Link></Button>
                        <Popconfirm title="确认删除已选内容?" okText="是" cancelText="否"
                                    onConfirm={this.handleDeleteAll}>
                            <Button type="default" size="small" icon={<DeleteOutlined/>}
                                    style={{backgroundColor: '#E67A5C'}} danger disabled={!hasSelected}
                                    loading={loading}>
                                删除
                            </Button>
                        </Popconfirm>
                        <Button type="primary" size="small" style={{backgroundColor: '#30B29D'}}
                                icon={<KeyOutlined/>} onClick={this.auth}>授权</Button>
                        <Button type="primary" size="small" style={{backgroundColor: '#988DB6'}}
                                icon={<ToolOutlined/>} onClick={this.config}>策略绑定</Button>
                        <span className="deleteTips">
                        {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
                    </span>
                        <ConditionalSearch/>
                    </div>
                    <TableTest dataSource={dataSource} columns={columns}/>
                </Content>
            </Layout>

        );
    }
}

export default UserGroup;
