import React, {Component} from 'react';
import TableTest from '../../components/TableTest'
import ConditionalSearch from '../../components/ConditionalSearch'
import {Link} from "react-router-dom";
import {EditOutlined, EyeOutlined, KeyOutlined, PlayCircleOutlined, VideoCameraOutlined} from "@ant-design/icons";
import {message} from "antd";

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



class Adduser extends Component {
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
            <div>
                <ConditionalSearch/>
                <TableTest/>
            </div>
        );
    }
}

export default Adduser;
