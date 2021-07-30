import React, {Component} from 'react';
import {Space} from 'antd'
import {Table, Input, Drawer, Button, Collapse,} from 'usue-cc';
import {MenuUnfoldOutlined, EllipsisOutlined, SmileOutlined} from '@ant-design/icons';

import './index.css'
import FormRender, {connectForm} from "form-render";

const {Search} = Input;
const {Panel} = Collapse;

const columns = [
    {
        title: '列标题01',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '列标题02',
        dataIndex: 'age',
        key: 'age',
    },
    {
        title: '列标题03',
        dataIndex: 'address',
        key: 'address',
    },
    {
        title: '操作',
        key: 'option',
        render: (text, record) => (
            <Space size="middle">
                <a><SmileOutlined style={{color: "#1F64FF"}}/> 详情</a>
                <a><SmileOutlined style={{color: "#1F64FF"}}/> 编辑</a>
                <a><Collapse
                    bordered={false}
                    expandIcon={({isActive}) => <EllipsisOutlined rotate={isActive ? 0 : 0}/>}
                    className="site-collapse-custom-collapse"
                >
                    <Panel key="1" className="site-collapse-custom-panel">
                        <ul>
                            <li>导出</li>
                            <li>编辑</li>
                            <li>解析</li>
                        </ul>
                    </Panel>
                </Collapse>
                </a>
            </Space>
        ),
    },
];

const data = [
    {
        key: '1',
        name: 'John Brown',
        age: 132.64,
        address: '888.888.888.888',
        tags: ['运行中'],
    },
    {
        key: '2',
        name: 'Jim Green',
        age: 542.93,
        address: '888.888.888.888',
        tags: ['未校验'],
    },
    {
        key: '3',
        name: 'Joe Black',
        age: 32.23,
        address: '888.888.888.888',
        tags: ['完成'],
    },
    {
        key: '4',
        name: 'Joe Bla',
        age: 125.20,
        address: '888.888.888.888',
        tags: ['错误'],
    },
    {
        key: '5',
        name: 'Joe Bla',
        age: 125.20,
        address: '888.888.888.888',
        tags: ['运行中'],
    },
    {
        key: '6',
        name: 'Joe Bla',
        age: 125.20,
        address: '888.888.888.888',
        tags: ['完成'],
    },
];

const schema = {
    "type": "object",
    "properties": {
        "input_wQcX00": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_IJ_wG5": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "date_ckor-Z": {
            "title": "日期选择",
            "type": "string",
            "format": "date"
        },
        "input_zLoL2n": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_XlMQv_": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_8qhSEl": {
            "title": "输入框",
            "type": "string",
            "props": {}
        },
        "input_qcKDJk": {
            "title": "输入框",
            "type": "string",
            "props": {}
        }
    },
    "labelWidth": 80,
    "displayType": "row"
}

class TableUser extends Component {
    state = {
        visible: false,
        selectionType: 'checkbox',
        selectedRowKeys: []
    }
    showDrawer = () => {
        const {visible} = this.state;
        this.setState({visible: !visible})
    };
    onClose = () => {
        this.state.visible = false
    };
    onSelectChange = selectedRowKeys => {
        console.log('selectedRowKeys changed: ', selectedRowKeys);
        this.setState({selectedRowKeys: selectedRowKeys})
    };
    searchValue=(value,event)=>{
        console.log('搜索框value',value,event)
        // this.props.
    }
    render() {
        const {selectedRowKeys} = this.state
        const {form} = this.props
        const rowSelection = {
            selectedRowKeys,
            onChange: this.onSelectChange,
        };
        return (
            <div>
                <div className="site-drawer-render-in-current-wrapper">
                    <div style={{float: 'right', marginBottom: 16}}>
                        <Search placeholder="请输入文本" allowClear onSearch={this.searchValue} style={{width: 184}}/>
                        <MenuUnfoldOutlined onClick={this.showDrawer} className="filt"/>
                    </div>
                    <Drawer
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}
                        getContainer={false}
                        mask={false}
                        style={{position: 'absolute'}}
                        footer={
                            <div>
                                <Button onClick={this.onClose} type="link" style={{marginRight: 8}}>
                                    重置
                                </Button>
                                <Button onClick={this.onClose} type="primary" size="large" style={{float: 'right'}}>
                                    确定
                                </Button>
                            </div>
                        }
                    >
                        <FormRender form={form} schema={schema} onFinish={this.onFinish}/>
                    </Drawer>
                    <Table rowSelection={rowSelection} columns={columns} dataSource={data} pagination={{
                        defaultPageSize: 3,
                        total: data.length,
                        showTotal: (total, range) => `当前第${range[0]}～${range[1]}条 / 共${total} 条`
                    }} className="tableStyle"/>
                </div>
            </div>
        );
    }
}


export default connectForm(TableUser);
