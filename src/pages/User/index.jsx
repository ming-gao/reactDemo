import React, {Component} from 'react';
import {Button, Input, Layout, message, Modal, Popconfirm, Steps} from "antd";
// import Tableuser from "../../components/Tableuser";
import TableTest from "../../components/TableTest";
import Demo from '../../components/Tree'
import ConditionalSearch from "../../components/ConditionalSearch";
import {
    DeleteOutlined, EditOutlined,
    ExportOutlined, EyeOutlined,
    ImportOutlined, KeyOutlined,
    LockOutlined, PlayCircleOutlined,
    PlusOutlined, ToolOutlined,
    UnlockOutlined, VideoCameraOutlined
} from "@ant-design/icons";
import {Link} from "react-router-dom";

import './user.css'

const {Sider, Content} = Layout;
const { Step } = Steps;
const steps = [
    {
        title: '设置密码',
        description:"密码长度6~20位，任意字母或数字组合",
        content: <Input.Password placeholder="input password" className="M-steps-input" />,
    },
    {
        title: '下载',
        content: '处理完毕，可以进行下载',
    }
];
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
class User extends Component {
    // 那里有状态，就在哪里操作状态
    state = {
        selectedRowKeys: [],
        loading: false,
        treeData: [],
        total: 0,
        pageNum: 1,
        pageSize: 0,
        searchText: '',
        searchedColumn: '',
        visible: false,  //对话框可见性控制
        current: 0 //步骤条进度控制
    };

    addColumn = (column) => {
        this.setState({column})
    }
    lock=()=>{
        if (this.state.selectedRowKeys.length===0){
            message.warning('请选择要操作的对象');
        }else{
            message.success('执行成功');
        }

    }
    unlock=()=>{
        if (this.state.selectedRowKeys.length===0){
            message.warning('请选择要操作的对象');
        }
    }
    importcus=()=>{

        message.warning('一级节点下不能添加数据');
    }
    exportcus=()=>{
        this.setState({visible:true})
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
    ad=()=>{
        message.warning('一级节点下不能添加数据');
    }
    showModal = () => {
        this.setState({
            visible: true,
        });
    };
    handleCancel = () => {
        this.setState({ visible: false });
    };
    render() {
        const {loading, selectedRowKeys, treeData,visible} = this.state;
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        const hasSelected = selectedRowKeys.length > 1;
        const {current} = this.state

        const next = () => {
            this.setState({current:current+1})

        };
        return (
            <Layout className='User'>
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
                            <Button type="default" size="small" style={{backgroundColor: '#F2AE00'}} icon={<LockOutlined />} onClick={this.lock}>锁定</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#439EDB'}} icon={<UnlockOutlined />} onClick={this.unlock}>解锁</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#FBA1D0'}} icon={<ImportOutlined />} onClick={this.importcus}>导入</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#FBA1D0'}} icon={<ExportOutlined />} onClick={this.exportcus}>导出</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#30B29D'}} icon={<KeyOutlined />} onClick={this.auth}>授权</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#988DB6'}} icon={<ToolOutlined />} onClick={this.config}>策略绑定</Button>
                            <Button type="default" size="small" style={{backgroundColor: '#188D8F'}} icon={<ImportOutlined />} onClick={this.ad}>AD域导入</Button>
                            <span className="deleteTips">
                        {hasSelected ? `选择了 ${selectedRowKeys.length} 项` : ''}
                    </span>
                            <Modal
                                visible={visible}
                                title="导出"
                                onCancel={this.handleCancel}
                                footer={null}
                            >
                                <Steps current={current} className="M-steps">
                                    {steps.map(item => (
                                        <Step key={item.title} title={item.title} description={item.description} />
                                    ))}
                                </Steps>
                                <div className="steps-content">
                                    {steps[current].content}
                                    {current < steps.length - 1 && (
                                        <Button type="primary" size="middle " onClick={() => next()}>
                                            设置
                                        </Button>
                                    )}
                                    {current === steps.length - 1 && (
                                        <Button type="primary" size="middle " onClick={() => message.success('下载成功!')}>
                                            点击下载
                                        </Button>
                                    )}
                                </div>
                                <div className="steps-action">

                                </div>
                            </Modal>
                            <ConditionalSearch/>
                        </div>
                        <TableTest dataSource={dataSource} columns={columns}/>
                    </Content>
                    {/*<Tableuser buttonProps={this.buttonProps} column={this.state.column}/>*/}
                </Layout>
            </Layout>
        );
    }
}

export default User;
