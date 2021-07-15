import React, {Component} from 'react';
import PubSub from 'pubsub-js'
import {Button, Popconfirm, Table, Input, Space, Modal, message,Steps, Collapse } from 'antd';
import {Router, Route, Link} from 'react-router-dom'
import 'antd/dist/antd.css'
import Highlighter from 'react-highlight-words';
import {EyeInvisibleOutlined, EyeTwoTone ,SearchOutlined,PlusOutlined,DeleteOutlined,LockOutlined,UnlockOutlined,ImportOutlined,ExportOutlined,KeyOutlined,ToolOutlined,} from '@ant-design/icons';
import ConditionalSearch from '../ConditionalSearch'

import './index.css'

const { Step } = Steps;
const { Panel } = Collapse;
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

const tableData = [];
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        tableData.push({
            key: `0-${i}-${j}`,
            label: `Edward King ${i} - ${j}`,
            value: i + j,
        });
    }
}
for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
        for (let k = 0; k < 10; k++) {
            tableData.push({
                key: `0-${i}-${j}-${k}`,
                label: `Edward King ${i} - ${j}`,
                value: i + j,
            });
        }
    }
}

export default class Tableuser extends Component {
    constructor(props) {
        super(props);
        this.columns = [
            {
                title: '名称',
                dataIndex: 'label',
                ...this.getColumnSearchProps('label'),
            },
            {
                title: '数值',
                dataIndex: 'value',
                key: 'value',
                ...this.getColumnSearchProps('value')
            },
            {
                title: '动作',
                key: 'action',
                render: (_, record) =>
                    this.state.treeData.length >= 1 ? (
                        <Popconfirm title="确认删除?" okText="是" cancelText="否"
                                    onConfirm={() => this.handleDelete(record.key)}>
                            <Button danger type="default" size="small">删除</Button>
                        </Popconfirm>
                    ) : null,
            },
        ];
        this.state = {
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
    }

    getColumnSearchProps = dataIndex => ({
        filterDropdown: ({setSelectedKeys, selectedKeys, confirm, clearFilters}) => (
            <div style={{padding: 8}}>
                <Input
                    ref={node => {
                        this.searchInput = node;
                    }}
                    placeholder={`搜索 ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{marginBottom: 8, display: 'block'}}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => this.handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined/>}
                        size="small"
                        style={{width: 90}}
                    >
                        搜索
                    </Button>
                    <Button onClick={() => this.handleReset(clearFilters)} size="small" style={{width: 90}}>
                        重置
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({closeDropdown: false});
                            this.setState({
                                searchText: selectedKeys[0],
                                searchedColumn: dataIndex,
                            });
                        }}
                    >
                        过滤
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: filtered => <SearchOutlined style={{color: filtered ? '#1890ff' : undefined}}/>,
        onFilter: (value, record) =>
            record[dataIndex]
                ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
                : '',
        onFilterDropdownVisibleChange: visible => {
            if (visible) {
                setTimeout(() => this.searchInput.select(), 100);
            }
        },
        render: text =>
            this.state.searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{backgroundColor: '#ffc069', padding: 0}}
                    searchWords={[this.state.searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        this.setState({
            searchText: selectedKeys[0],
            searchedColumn: dataIndex,
        });
    };

    handleReset = clearFilters => {
        clearFilters();
        this.setState({searchText: ''});
    };

    componentDidMount() {
        //消息订阅,添加数据到表格
        PubSub.subscribe('checkData', (_, data) => {
            console.log('接收key', data)
            const tempData = tableData.filter(list => {
                return list.key === data.key
            })
            let treeData = [...this.state.treeData]
            treeData.push(tempData[0])
            this.setState({treeData: treeData});
        })
        // 取消勾选的key值
        PubSub.subscribe('cancelCheckData', (_, data) => {
            console.log(data)
            const {treeData} = this.state
            const newTrees = treeData.filter(tree => {
                return tree.key !== data.key
            })
            this.setState({treeData: newTrees})
        })
        this.rowClassName = (record, index) => {
            return index % 2 ? 'tableTrEvenColor' : ''
        }
    }

    componentWillUnmount() {
        // 解除订阅
        PubSub.unsubscribe('checkData')
    }

    //批量删除
    bantchDelete(taskList, deleteTaskIds) {
        for (let i = 0; i < taskList.length;) {
            let task = taskList[i];
            //根据key删除
            if (deleteTaskIds.indexOf(task.key) !== -1) {
                taskList.splice(i, 1);
                continue;
            }
            i++;
        }
        return taskList
    };

    // 删除单个
    handleDelete = async (key) => {
        console.log('删除单个方法', key)
        let treeData = [...this.state.treeData]
        await this.setState({
            treeData: treeData.filter((item) => item.key !== key)
        })
        let temp = treeData.filter((item) => item.key !== key)
        let selectedKey = temp.map(item => {
            return item.key;
        })
        PubSub.publish('deleteByKey', selectedKey)
        await this.setState({selectedRowKey: []})
    };
    //删除多选
    handleDeleteAll = async () => {
        const {selectedRowKeys} = this.state
        let treeData = [...this.state.treeData]
        // console.log(this.bantchDelete(treeData, selectedRowKeys))
        await this.setState(() => {
            return {treeData: this.bantchDelete(treeData, selectedRowKeys)}
        })
        console.log(treeData)
        let selectedKeys = treeData.map(item => {
            return item.key;
        })
        // console.log(selectedKeys)
        PubSub.publish('deleteByRowKeys', selectedKeys)
        this.setState({selectedRowKeys: []})
    };
    //向表格中添加数据
    addColumn = () => {

    }
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys});
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
            <div className='tableContainer'>
                <Table rowSelection={rowSelection} rowClassName={this.rowClassName} columns={this.columns}
                       pagination={{
                           pageSizeOptions: [5, 10, 20],
                           showSizeChanger: true,
                           total: this.state.total,
                           showTotal: detailTotal => `总共 ${detailTotal} 条记录`,
                       }}
                       size='small'
                       showLine={true} dataSource={treeData}
                />
            </div>
        );
    }
}


