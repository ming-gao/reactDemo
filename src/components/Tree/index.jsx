import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import {Tree, Input, Divider} from 'antd';
import PropTypes from 'prop-types';
import {UserOutlined} from "@ant-design/icons";

import './tree.css'

const {Search} = Input;

const treeData = [
    {
        title: '组织机构',
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
const dataList = [];  //压平的数据
const generateList = data => {  //压平树节点数据
    for (let i = 0; i < data.length; i++) {
        const node = data[i];
        const {key} = node;
        dataList.push({key, title: key});
        if (node.children) {
            generateList(node.children);
        }
    }
};
generateList(treeData);

const getParentKey = (key, tree) => {  //获取节点的父节点
    let parentKey;
    for (let i = 0; i < tree.length; i++) {
        const node = tree[i];
        if (node.children) {
            if (node.children.some(item => item.key === key)) {
                parentKey = node.key;
            } else if (getParentKey(key, node.children)) {
                parentKey = getParentKey(key, node.children);
            }
        }
    }
    return parentKey;
};

class Demo extends Component {
    state = {
        checkedKeys: [],
        expandedKeys: ['0-0'],
        searchValue: '',
        autoExpandParent: true,
    }
    static propTypes = {
        isShowSearch: PropTypes.bool
    }
    static defaultProps = {
        isShowSearch: true
    }
    onExpand = (expandedKeys) => {
        console.log('onExpand', expandedKeys);
        this.setState({expandedKeys: expandedKeys})
    }

    componentDidMount() {

        PubSub.subscribe('deleteByKey', (_, key) => {
            console.log('返回的key', key)
            this.setState({checkedKeys: key})

        })
        PubSub.subscribe('deleteByRowKeys', (_, keys) => {
            console.log('多选删除返回的keys', keys)
            this.setState({checkedKeys: keys})
        })
    }

    onChange = e => {
        const {value} = e.target;
        const expandedKeys = dataList
            .map(item => {
                if (item.title.indexOf(value) > -1) {
                    return getParentKey(item.key, treeData);
                }
                return null;
            })
            .filter((item, i, self) => item && self.indexOf(item) === i);
        this.setState({
            expandedKeys,
            searchValue: value,
            autoExpandParent: true,
        });
    };

    render() {
        const {searchValue, expandedKeys, autoExpandParent} = this.state;
        this.onCheck = (checkedKeysValue, e) => {
            console.log('onCheck', checkedKeysValue, e);
            this.setState({checkedKeys: checkedKeysValue, isHalfChecked: e.halfCheckedKeys.length === 1})
            if (e.checked) {
                PubSub.publish('checkData', e.node)
            } else {
                PubSub.publish('cancelCheckData', e.node)
            }
        }
        const loop = data =>
            data.map(item => {
                const index = item.title.indexOf(searchValue);
                const beforeStr = item.title.substr(0, index);
                const afterStr = item.title.substr(index + searchValue.length);
                const title =
                    index > -1 ? (
                        <span>{beforeStr}
                            <span className="site-tree-search-value">{searchValue}</span>
                            {afterStr}
                        </span>
                    ) : (
                        <span>{item.title}</span>
                    );
                if (item.children) {
                    return {title, key: item.key, children: loop(item.children)};
                }

                return {
                    title,
                    key: item.key,
                };
            });
        return (
            <div className='tree-container'>
                <h1>{this.props.title}</h1>
                <Divider className='tree-divider'/>
                {this.props.isShowSearch ? (
                    <Search style={{marginBottom: 8}} allowClear={true} size='small' placeholder="Search"
                            onChange={this.onChange}/>) : null}
                <Tree
                    showIcon
                    defaultExpandedKeys={this.state.expandedKeys}
                    onExpand={this.onExpand}
                    autoExpandParent={autoExpandParent}
                    expandedKeys={expandedKeys}
                    onCheck={this.onCheck}
                    checkedKeys={this.state.checkedKeys}
                    treeData={loop(treeData)}
                >
                </Tree>
            </div>

        );
    }
}

export default Demo

