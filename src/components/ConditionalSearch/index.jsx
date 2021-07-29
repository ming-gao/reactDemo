import React, {Component} from 'react';
import {Button, Collapse,Space} from 'antd';
import {SearchOutlined, ClearOutlined, CloseSquareOutlined, FilterOutlined} from '@ant-design/icons';
import FormRender, {connectForm} from 'form-render';

import './ConditionalSearch.css'

const {Panel} = Collapse;

class ConditionalSearch extends Component {
    onFinish=(value)=>{
        this.props.getFormvalue(value)
        console.log(value)

    }
    buttonClick=()=>{
        this.props.form.resetFields()
        this.props.getTableData()
    }

    render() {
        const {form, schema} = this.props;
        return (
            <Collapse ghost bordered={false} expandIconPosition="right" expandIcon={({ isActive }) => isActive? <CloseSquareOutlined />:<FilterOutlined />}>
                <Panel key="1">
                    <FormRender form={form} schema={schema} onFinish={this.onFinish}/>
                    <Space align="end" style={{width:'100%'}}>
                        <Button icon={<SearchOutlined />} size="small" type="primary" onClick={form.submit}>
                            查询
                        </Button>
                        <Button icon={<ClearOutlined />} size="small" type="primary"  onClick={this.buttonClick}>
                            清空
                        </Button>
                    </Space>
                </Panel>
            </Collapse>
        );
    }
}

export default connectForm(ConditionalSearch);
