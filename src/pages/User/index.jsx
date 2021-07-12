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
            name: 'add',
            icon: '',
            color: ''
        },
        {
            key:'delete',
            name: 'delete',
            message: '请选择要删除的对象',
            modal: '确定是否删除？',
            icon: '',
            color: ''
        },
        {
            key:'lock',
            name: 'lock',
            message: '请选择要操作的对象',
            icon: '',
            color: ''
        },
        {
            key:'unlock',
            name: 'unlock',
            message: '请选择要操作的对象',
            icon: '',
            color: ''
        },
        {
            key:'importcus',
            name: 'importcus',
            message: "一级节点下不能添加数据",
            icon: '',
            color: ''
        },
        {
            key:'exportcus',
            name: 'exportcus',
            icon: '',
            color: ''
        },
        {
            key:'auth',
            name: 'auth',
            message: '请选择至少一个用户',
            icon: '',
            color: ''
        },
        {
            key:'config',
            name: 'config',
            message: '请选择至少一个用户',
            icon: '',
            color: ''
        },
        {
            key:'ad',
            name: 'ad',
            message: "一级节点下不能添加数据",
            icon: '',
            color: ''
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
