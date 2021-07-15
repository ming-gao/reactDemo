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
    { userID: '湖北省', userName: 54406, userStatus: 4793, userGroup: 1457, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '广东省', userName: 1294, userStatus: 409, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '河南省', userName: 1212, userStatus: 390, userGroup: 13, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '浙江省', userName: 1162, userStatus: 428, userGroup: 0, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '湖南省', userName: 1001, userStatus: 417, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '浙江省', userName: 1162, userStatus: 428, userGroup: 0, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '湖南省', userName: 1001, userStatus: 417, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '浙江省', userName: 1162, userStatus: 428, userGroup: 0, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '湖南省', userName: 1001, userStatus: 417, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '浙江省', userName: 1162, userStatus: 428, userGroup: 0, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '湖南省', userName: 1001, userStatus: 417, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
]

const columns = [
    { code: 'userID', name: '用户ID', width: 150 },
    { code: 'userName', name: '用户姓名', width: 100, align: 'right' },
    { code: 'userStatus', name: '用户状态', width: 100, align: 'right' },
    { code: 'userGroup', name: '所属用户组', width: 100, align: 'right' },
    { code: 'phone', name: '电话号码', width: 180 },
    { code: 'description', name: '描述', width: 180 },
    {
        code: 'action',
        name: '动作',
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
                        <PlayCircleOutlined style={{fontSize: 18}}/>
                    </Link>
                    <Link to='/user'>
                        <VideoCameraOutlined style={{fontSize: 18}}/>
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
                    <Sider><Demo isShowSearch={false} addColumn={this.addColumn}/></Sider>
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
