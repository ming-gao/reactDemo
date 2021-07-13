import React, {Component} from 'react';
import {Layout} from "antd";
import Tableuser from "../../components/Tableuser";
import Demo from '../../components/Tree'

const {Sider, Content} = Layout;

class User extends Component {
    // 那里有状态，就在哪里操作状态
    state = {column: []}
    buttonProps = [
        {
            key:'add',
            name: '添加',
            icon: 'PlusOutlined',
            color: '#84C93C'
        },
        {
            key:'delete',
            name: '删除',
            message: '请选择要删除的对象',
            modal: '确定是否删除？',
            icon: '<DeleteOutlined />',
            color: '#E67A5C'
        },
        {
            key:'lock',
            name: '锁定',
            message: '请选择要操作的对象',
            icon: '<LockOutlined />',
            color: '#F2AE00'
        },
        {
            key:'unlock',
            name: '解锁',
            message: '请选择要操作的对象',
            icon: '<UnlockOutlined />',
            color: '#439EDB'
        },
        {
            key:'importcus',
            name: '导入',
            message: "一级节点下不能添加数据",
            icon: '<ImportOutlined />',
            color: '#FBA1D0'
        },
        {
            key:'exportcus',
            name: '导出',
            icon: '<ExportOutlined />',
            color: '#FBA1D0'
        },
        {
            key:'auth',
            name: '批量授权',
            message: '请选择至少一个用户',
            icon: '<KeyOutlined />',
            color: '#30B29D'
        },
        {
            key:'config',
            name: '策略绑定',
            message: '请选择至少一个用户',
            icon: '<ToolOutlined />',
            color: '#988DB6'
        },
        {
            key:'ad',
            name: 'AD域导入',
            message: "一级节点下不能添加数据",
            icon: '<ImportOutlined />',
            color: '#188D8F'
        }]

    addColumn = (column) => {
        this.setState({column})
    }

    render() {
        return (
            <Layout className='User'>
                <Layout>
                    <Sider><Demo isShowSearch={false} addColumn={this.addColumn}/></Sider>
                    <Content><Tableuser buttonProps={this.buttonProps} column={this.state.column}/></Content>
                </Layout>
            </Layout>
        );
    }
}

export default User;
