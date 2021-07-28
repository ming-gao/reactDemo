import React, {Component} from 'react';
import { Tree } from 'antd';
import {DownOutlined, UserOutlined,} from '@ant-design/icons';

const treeData = [
    {
        title: '0-0',
        key: '0-0',
        icon: <UserOutlined/>,
        children: [
            {
                title: '0-0-0',
                key: '0-0-0',
                icon: <UserOutlined/>,

            },
            {
                title: '0-0-1',
                key: '0-0-1',
                icon: <UserOutlined/>,

            },
            {
                title: '0-0-2',
                key: '0-0-2',
                icon: <UserOutlined/>,

            },
            {
                title: '0-0-3',
                key: '0-0-3',
                icon: <UserOutlined/>,

            },
            {
                title: '0-0-4',
                key: '0-0-4',
                icon: <UserOutlined/>,

            },
            {
                title: '0-0-5',
                key: '0-0-5',
                icon: <UserOutlined/>,

            },
        ],
    },
    {
        title: '0-1',
        key: '0-1',
        icon: <UserOutlined/>,
        children: [
            {
                title: '0-1-0',
                key: '0-1-0',
                icon: <UserOutlined/>,

            },
            {
                title: '0-1-1',
                key: '0-1-1',
                icon: <UserOutlined/>,

            },
            {
                title: '0-1-2',
                key: '0-1-2',
                icon: <UserOutlined/>,

            },
        ],
    }
];

class NewTree extends Component {
    render() {
        return (
            <Tree
                showIcon
                defaultExpandAll
                defaultSelectedKeys={['0-0-0']}
                switcherIcon={<DownOutlined />}
                treeData={treeData}
            />
        );
    }
}

export default NewTree;
