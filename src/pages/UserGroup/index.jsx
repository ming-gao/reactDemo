import React, {Component} from 'react';
import TableTest from "../../components/TableTest";
import ConditionalSearch from '../../components/ConditionalSearch'
import {Layout,Button,message,Popconfirm} from "antd";
import {Link} from "react-router-dom";
import {
    DeleteOutlined, EditOutlined, EyeOutlined, KeyOutlined, PlayCircleOutlined,
    PlusOutlined, ToolOutlined, VideoCameraOutlined,
} from "@ant-design/icons";
import Demo from "../../components/Tree";

const {Sider, Content} = Layout;
const dataSource = [
    { userName: 54406,description: 1272457, },
    { userName: 34,description: 147557, },
    { userName: 52346,description: 1453727, },
    { userName: 5431406,description: 21457, },
    { userName: 5412406,description: 271457, },
    { userName: 5479406,description: 6731457, },
    { userName: 5445406,description: 35671457, },
    { userName: 1154406,description: 2671457, },
    { userName: 5414406,description: 26735221457, },
    { userName: 7854406,description: 222751457, },
    { userName: 5364406,description: 2751457, },
    { userName: 5486406,description: 2571457, },
    { userName: 5427406,description: 271457, },
]

const columns = [
    { title: 'userName', dataIndex: 'userName', key: 'userName', },
    { title: 'description', dataIndex: 'description', key: 'description', },
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
    }
    addColumn = (column) => {
        this.setState({column})
    }
    auth=()=>{
        if (this.state.selectedRowKeys.length===0){
            message.warning('请选择要操作的对象');
        }
    }
    config=()=>{
        if (this.state.selectedRowKeys.length===0){
            message.warning('请选择要操作的对象');
        }
    }
    render() {
        const {loading, selectedRowKeys} = this.state;
        const hasSelected = selectedRowKeys.length > 1;
        return (
            <div>
                <Layout>
                    <Sider><Demo title='用户目录' isShowSearch={false} addColumn={this.addColumn}/></Sider>
                    <Content>
                        <div className='tableTitle'>
                            <Button type="default" size="small" onClick={this.addColumn} icon={<PlusOutlined />} style={{backgroundColor: '#84C93C'}}><Link to='/addPage/'>添加</Link></Button>
                            <Popconfirm title="确认删除已选内容?" okText="是" cancelText="否"
                                        onConfirm={this.handleDeleteAll}>
                                <Button type="default" size="small" icon={<DeleteOutlined />} style={{backgroundColor: '#E67A5C'}} danger disabled={!hasSelected}
                                        loading={loading}>
                                    删除
                                </Button>
                            </Popconfirm>
                            <Button type="default" size="small" style={{backgroundColor: '#30B29D'}} icon={<KeyOutlined />} onClick={this.auth}>授权</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#988DB6'}} icon={<ToolOutlined />} onClick={this.config}>策略绑定</Button>
                            <span className="deleteTips">
                        {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
                    </span>
                            <ConditionalSearch/>
                        </div>
                        <TableTest dataSource={dataSource} columns={columns}/>
                    </Content>
                </Layout>
            </div>
        );
    }
}

export default UserGroup;
