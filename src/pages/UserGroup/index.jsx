import React, {Component} from 'react';
import {Layout, message, Popconfirm} from "antd";
import { Button } from 'usue-cc';
import {Link} from "react-router-dom";
import { DeleteOutlined, EditOutlined, EyeOutlined, KeyOutlined, PlusOutlined, ToolOutlined,} from "@ant-design/icons";
import {getGroupTable} from '../../api/user'

import NewTree from '../../components/NewTree'
import TableTest from "../../components/TableTest";
import ConditionalSearch from '../../components/ConditionalSearch'

import './usergroup.less'

const {Sider, Content} = Layout;

const columns = [
    {title: 'userName', dataIndex: 'userName',render:(text,record)=>{
        return <span title={text}>{text}</span>
        }},
    {title: 'description', dataIndex: 'description',render:(text,record)=>{
            return <span title={text}>{text}</span>
        }},
    {
        title: 'action',
        dataIndex: 'action',
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

const schema={
    "type": "object",
    "properties": {
        "input_kRYPJ2": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_m4jmti": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "date_4hFxMb": {
            "title": "日期选择",
            "type": "string",
            "format": "date"
        },
        "input_h-00QT": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_n4Larp": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_X7K_JO": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_lvNzm6": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_Cjlaul": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "select_U6ArhO": {
            "title": "单选",
            "type": "string",
            "enum": [
                "a",
                "b",
                "c"
            ],
            "enumNames": [
                "早",
                "中",
                "晚"
            ],
            "widget": "select"
        },
        "select_CmjMcl": {
            "title": "单选",
            "type": "string",
            "enum": [
                "a",
                "b",
                "c"
            ],
            "enumNames": [
                "早",
                "中",
                "晚"
            ],
            "widget": "select"
        }
    },
    "column": 3,
    "labelWidth": 80,
    "displayType": "row"
}
class UserGroup extends Component {
    state = {
        selectedRowKeys: [],
        loading: true,
        dataSource: []
    }
    addColumn = () => {

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
            this.setState({dataSource: res.data.list,loading:false})
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
                                style={{backgroundColor: '#84C93C'}}><Link to='/adduser/'>添加</Link></Button>
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
                        <ConditionalSearch schema={schema}/>
                    </div>
                    <TableTest dataSource={dataSource} columns={columns} loading={loading}/>
                </Content>
            </Layout>
        );
    }
}

export default UserGroup;
