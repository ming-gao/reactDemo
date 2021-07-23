import React, {Component} from 'react';
import {Card, Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Space, Button} from 'antd';

import {MinusCircleOutlined, SmileOutlined, PlusOutlined} from '@ant-design/icons';

import DrawerSearch from "../../components/DrawerSearch";

import './adduser.less'

const {Option} = Select;
const formItemLayout = {
    labelCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 5,
        },
    },
    wrapperCol: {
        xs: {
            span: 24,
        },
        sm: {
            span: 12,
        },
    },
};

const areas = [
    {label: 'Beijing', value: 'Beijing'},
    {label: 'Shanghai', value: 'Shanghai'},
];

const sights = {
    Beijing: ['Tiananmen', 'Great Wall'],
    Shanghai: ['Oriental Pearl', 'The Bund'],
};


class AddUser extends Component {
    state = {
        form: {}
    }
    formRef = React.createRef();

    render() {

        const onFinish = values => {
            console.log('Received values of form:', values);
        };

        const handleChange = () => {
            this.formRef.current.setFieldsValue({sights: []});
        };

        return (
            <div>
                <Card title="用户信息" className="P-card P-card-userinfo" bordered={false}>
                    <Form {...formItemLayout}>
                        <Form.Item
                            label="Fail"
                            validateStatus="error"
                            help="Should be combination of numbers & alphabets"
                        >
                            <Input placeholder="unavailable choice" id="error"/>
                        </Form.Item>

                        <Form.Item label="Warning" validateStatus="warning">
                            <Input placeholder="Warning" id="warning" prefix={<SmileOutlined/>}/>
                        </Form.Item>

                        <Form.Item
                            label="Validating"
                            hasFeedback
                            validateStatus="validating"
                            help="The information is being validated..."
                        >
                            <Input placeholder="I'm the content is being validated" id="validating"/>
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                            <Input placeholder="I'm the content" id="success"/>
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                            <Input placeholder="Warning" id="warning2"/>
                        </Form.Item>

                        <Form.Item
                            label="Fail"
                            hasFeedback
                            validateStatus="error"
                            help="Should be combination of numbers & alphabets"
                        >
                            <Input placeholder="unavailable choice" id="error2"/>
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                            <DatePicker
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                            <TimePicker
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Error" hasFeedback validateStatus="error">
                            <Select allowClear>
                                <Option value="1">Option 1</Option>
                                <Option value="2">Option 2</Option>
                                <Option value="3">Option 3</Option>
                            </Select>
                        </Form.Item>

                        <Form.Item
                            label="Validating"
                            hasFeedback
                            validateStatus="validating"
                            help="The information is being validated..."
                        >
                            <Cascader
                                options={[
                                    {
                                        value: 'xx',
                                        label: 'xx',
                                    },
                                ]}
                                allowClear
                            />
                        </Form.Item>

                        <Form.Item
                            label="inline"
                            style={{
                                marginBottom: 0,
                            }}
                        >
                            <Form.Item
                                validateStatus="error"
                                help="Please select the correct date"
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 12px)',
                                }}
                            >
                                <DatePicker/>
                            </Form.Item>
                            <span
                                style={{
                                    display: 'inline-block',
                                    width: '24px',
                                    lineHeight: '32px',
                                    textAlign: 'center',
                                }}
                            >
                            </span>
                            <Form.Item
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(50% - 12px)',
                                }}
                            >
                                <DatePicker/>
                            </Form.Item>
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                            <InputNumber
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="Success" hasFeedback validateStatus="success">
                            <Input allowClear placeholder="with allowClear"/>
                        </Form.Item>

                        <Form.Item label="Warning" hasFeedback validateStatus="warning">
                            <Input.Password placeholder="with input password"/>
                        </Form.Item>

                        <Form.Item label="Error" hasFeedback validateStatus="error">
                            <Input.Password allowClear placeholder="with input password and allowClear"/>
                        </Form.Item>
                    </Form>
                </Card>
                <Card title="认证信息" className="P-card P-card-authinfo" bordered={false}>
                    <Form form={this.form} ref={this.formRef} name="dynamic_form_nest_item" onFinish={onFinish}
                          autoComplete="off">
                        <Form.Item name="area" label="Area" rules={[{required: true, message: 'Missing area'}]}>
                            <Select options={areas} onChange={handleChange}/>
                        </Form.Item>
                        <Form.List name="sights">
                            {(fields, {add, remove}) => (
                                <>
                                    {fields.map(field => (
                                        <Space key={field.key} align="baseline">
                                            <Form.Item
                                                noStyle
                                                shouldUpdate={(prevValues, curValues) =>
                                                    prevValues.area !== curValues.area || prevValues.sights !== curValues.sights
                                                }
                                            >
                                                {() => (
                                                    <Form.Item
                                                        {...field}
                                                        label="Sight"
                                                        name={[field.name, 'sight']}
                                                        fieldKey={[field.fieldKey, 'sight']}
                                                        rules={[{required: true, message: 'Missing sight'}]}
                                                    >
                                                        <Select disabled={!this.formRef.current.getFieldValue('area')}
                                                                style={{width: 130}}>
                                                            {(sights[this.formRef.current.getFieldValue('area')] || []).map(item => (
                                                                <Option key={item} value={item}>
                                                                    {item}
                                                                </Option>
                                                            ))}
                                                        </Select>
                                                    </Form.Item>
                                                )}
                                            </Form.Item>
                                            <Form.Item
                                                {...field}
                                                label="Price"
                                                name={[field.name, 'price']}
                                                fieldKey={[field.fieldKey, 'price']}
                                                rules={[{required: true, message: 'Missing price'}]}
                                            >
                                                <Input/>
                                            </Form.Item>
                                            <MinusCircleOutlined onClick={() => remove(field.name)}/>
                                        </Space>
                                    ))}

                                    <Form.Item>
                                        <Button type="dashed" onClick={() => add()} block icon={<PlusOutlined/>}>
                                            Add sights
                                        </Button>
                                    </Form.Item>
                                </>
                            )}
                        </Form.List>
                        <Form.Item>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </Card>
            </div>
        );
    }
}

export default AddUser;
