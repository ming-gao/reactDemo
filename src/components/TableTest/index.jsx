import React, {Component} from 'react';
import { BaseTable } from 'ali-react-table'
import {Button, Popconfirm} from "antd";
import {Router, Route, Link} from 'react-router-dom'
import {EditOutlined, EyeOutlined, PlayCircleOutlined, VideoCameraOutlined, KeyOutlined} from '@ant-design/icons';

import './TableTest.styl'

const dataSource = [
    { userID: '湖北省', userName: 54406, userStatus: 4793, userGroup: 1457, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '广东省', userName: 1294, userStatus: 409, userGroup: 2, phone: '2020-02-15 19:52:02',description: 1457, },
    { userID: '河南省', userName: 1212, userStatus: 390, userGroup: 13, phone: '2020-02-15 19:52:02',description: 1457, },
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

class TableTest extends Component {
    render() {
        return (
            <div>
                <BaseTable dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default TableTest;
