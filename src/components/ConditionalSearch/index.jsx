import React, {Component} from 'react';
import {Button, Collapse} from 'antd';
import {SearchOutlined, ClearOutlined, CloseSquareOutlined, FilterOutlined} from '@ant-design/icons';
import FormRender, {connectForm} from 'form-render';

import './ConditionalSearch.css'

const {Panel} = Collapse;
const schema = {
    "type": "object",
    "properties": {
        "input__9H5vD": {
            "title": "用户ID",
            "type": "string",
            "props": {},
            "width": "26%",
            "labelWidth": 64
        },
        "input_3vjhGE": {
            "title": "用户姓名",
            "type": "string",
            "props": {},
            "width": "26%",
            "labelWidth": 75
        },
        "select_XtkoIE": {
            "title": "用户状态",
            "type": "string",
            "width": "23%",
            "enum": [
                "a",
                "b",
                "c"
            ],
            "enumNames": [
                "不限",
                "正常",
                "锁定"
            ],
            "widget": "select"
        },
        "checkbox_vyH9gf": {
            "title": "查询子组",
            "type": "boolean",
            "widget": "checkbox",
            "width": "20%"
        }
    },
    "column": 3,
    "labelWidth": 86,
    "displayType": "row"

};

class ConditionalSearch extends Component {
    render() {
        const {form} = this.props;
        return (
            <Collapse ghost bordered={false} expandIconPosition="right" expandIcon={({ isActive }) => isActive? <CloseSquareOutlined />:<FilterOutlined />}>
                <Panel key="1">
                    <FormRender form={form} schema={schema}/>
                    <Button icon={<SearchOutlined />} size="small" type="primary" onClick={form.submit}>
                        查询
                    </Button>
                    <Button icon={<ClearOutlined />} size="small" type="primary" onClick={form.reset}>
                        清空
                    </Button>
                </Panel>
            </Collapse>
        );
    }
}

export default connectForm(ConditionalSearch);
