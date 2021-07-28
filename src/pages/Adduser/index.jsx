import React, {Component} from 'react';
import {Card, Form, Input, DatePicker, Radio, Button} from 'antd';

// import {} from '@ant-design/icons';
import CollapseDemo from "../../components/CollapseDemo";
import EditableTree from "../../components/Tree/EditableTree"

import './adduser.less'

// const {Option} = Select;
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

const panelA = [
    {
        text: '密码认证',
    },
    {
        text: '3324fd',
    },
    {
        text: '1231A23asd1',
    },
    {
        text: '1QWEV1231',
    },
]
const panelB = [
    {
        text: '12312',
    },
    {
        text: '$highl',
    },
    {
        text: '#F90。任',
    },
    {
        text: '作css属性值的',
    },
]
const panelC = [
    {
        text: '12312',
    },
    {
        text: '分割的多个属性',
    },
    {
        text: '这意味着变量',
    },
    {
        text: 'femaldvadv',
    },
]

const options = [
    {label: '男', value: 'male'},
    {label: '女', value: 'female'},
    {label: '未知', value: 'unknown'},
];
const options2 = [
    {label: '是', value: 'true'},
    {label: '否', value: 'false'},
];

class AddUser extends Component {
    state = {
        form: {},
        value1: '男',
        value2: '是',
        isActive: false,
        pickerOpen: false,
        panelData: [],
        buttonValue: '',
        handlePanelValue: '',  //折叠面板选中的值
    }
    formRef = React.createRef();

    componentDidMount() {

    }

    onChange3 = e => {
        console.log('radio3 checked', e.target.value);
        this.setState({
            value1: e.target.value,
        });
    };
    onChange4 = e => {
        console.log('radio3 checked', e.target.value);
        this.setState({
            value2: e.target.value,
        });
    };
    datePicker = (pickerOpen) => {
        this.setState({pickerOpen})
        console.log(pickerOpen)
        if (this.state.isActive) {
            this.setState({isActive: !pickerOpen});
        }
    }
    isActive = (e) => {
        const {isActive} = this.state
        this.setState({isActive: !isActive, buttonValue: e.target.innerHTML.replace(/\s*/g, "")});
    }
    getData = (data) => {
        console.log(data)
        this.setState({handlePanelValue: data})
    }
    onSubmit = (formData) => {
        if (formData.auth === undefined) {
            formData.auth = 'default'
        }
        // formData.forever=this.state.buttonValue
        console.log(formData)
    }

    render() {
        const {value1, value2, pickerOpen, handlePanelValue} = this.state
        const validateMessages = {
            required: '${label}是必填项!',
            types: {
                email: '${label} is not a valid email!',
                number: '${label} is not a valid number!',
            },
            string: {
                len: "'${name}' must be exactly ${len} characters",
                min: "'${name}' must be at least ${min} characters",
                max: "'${name}' cannot be longer than ${max} characters",
                range: "'${name}' must be between ${min} and ${max} characters",
            },
            number: {
                range: '${label} must be between ${min} and ${max}',
            },
        };
        return (
            <div>
                <Form {...formItemLayout} ref={this.formRef} onFinish={this.onSubmit}
                      validateMessages={validateMessages} scrollToFirstError>
                    <Card title="用户信息" className="P-card P-card-userinfo" bordered={false}>
                        <Form.Item
                            label="用户ID"
                            name="userid"
                            rules={[
                                {required: true},
                                {type: 'string', max: 20},
                                {pattern: new RegExp(/^[0-9a-z_]+$/, "g"), message: "必须以字母或数字开头和结尾，字母必须小写"}
                            ]}
                            hasFeedback
                        >
                            <Input placeholder="" id="userinfo"/>
                        </Form.Item>

                        <Form.Item label="用户姓名" name="username"
                                   rules={[
                                       {required: true},
                                       {type: 'string', max: 25},
                                   ]}
                                   hasFeedback
                        >
                            <Input id="userid"/>
                        </Form.Item>
                        <Form.Item label="生效日期" hasFeedback validateStatus="" name="effect">
                            <DatePicker
                                style={{
                                    width: '100%',
                                }}
                            />
                        </Form.Item>

                        <Form.Item label="有效期" style={{marginBottom: 0}} name="fdl"
                                   rules={[
                                       {required: true}
                                   ]}
                        >
                            <Form.Item
                                style={{
                                    display: 'inline-block',
                                    width: 'calc(15% - 12px)',
                                }}
                            >
                                <Button size="small" type="default" className={this.state.isActive ? 'isActive' : ''}
                                        onClick={(e) => this.isActive(e)}>永久</Button>
                            </Form.Item>
                            <span style={{
                                display: 'inline-block',
                                width: '24px',
                                lineHeight: '26px',
                                textAlign: 'center'
                            }}>或</span>
                            <Form.Item style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                                <DatePicker
                                    onOpenChange={this.datePicker}
                                    open={pickerOpen}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="用户组" name="usergroup"
                            rules={[
                                {required: true}
                            ]}
                        >
                            <EditableTree/>
                        </Form.Item>
                        <Form.Item label="性别" hasFeedback validateStatus="" name="gender">
                            <Radio.Group
                                size="small"
                                options={options}
                                onChange={this.onChange3}
                                value={value1}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </Form.Item>
                        <Form.Item
                            label="是否使能用户"
                            name="isEncy"
                            rules={[
                                {required: true}
                            ]}
                        >
                            <Radio.Group
                                size="small"
                                options={options2}
                                onChange={this.onChange4}
                                value={value2}
                                optionType="button"
                                buttonStyle="solid"
                            />
                        </Form.Item>
                        <Form.Item label="座机" help="请输入座机号码，格式为：区号-座机号（区号可选）" name="telephone">
                            <Input placeholder=""/>
                        </Form.Item>

                        <Form.Item label="手机" name="mobilephone"
                            rules={[
                                {whitespace:true},
                                {pattern: new RegExp(/^1(3\d|4[5-9]|5[0-35-9]|6[2567]|7[0-8]|8\d|9[0-35-9])\d{8}$/),message: "格式不正确"}
                            ]}
                        >
                            <Input placeholder=""/>
                        </Form.Item>

                        <Form.Item label="电子邮箱" hasFeedback validateStatus="" name="email">
                            <Input placeholder=""/>
                        </Form.Item>

                        <Form.Item label="通讯地址" hasFeedback validateStatus="" name="address">
                            <Input placeholder=""/>
                        </Form.Item>

                        <Form.Item label="描述 " hasFeedback validateStatus=""
                                   help="请输入简短描述，只能为汉字、英文数字、下划线、逗号和句号，不超过100个字符"
                                   name="desc">
                            <Input placeholder=""/>
                        </Form.Item>
                    </Card>
                    <Card title="认证信息" className="P-card P-card-authinfo" bordered={false}>
                        <Form.Item label='认证方式策略' name="auth">
                            <CollapseDemo panelData={panelA} getData={this.getData}/>
                        </Form.Item>
                        <div className={handlePanelValue !== '密码认证' ? 'disp-none' : ''}>
                            <Form.Item
                                label="登录密码"
                                name="pwd"
                                type="password"
                                rules={[
                                    {required: true}
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="" id="pwd"/>
                            </Form.Item>
                            <Form.Item
                                label="确认密码"
                                name="confirmPwd"
                                type="password"
                                dependencies={['pwd']}
                                rules={[
                                    {required: true},
                                    ({ getFieldValue }) => ({
                                        validator(_, value) {
                                            if (!value || getFieldValue('pwd') === value) {
                                                return Promise.resolve();
                                            }
                                            return Promise.reject(new Error('密码不一致!'));
                                        },
                                    }),
                                ]}
                                hasFeedback
                            >
                                <Input placeholder="" id="confirmPaw"/>
                            </Form.Item>
                        </div>
                        <Form.Item label='帐号密码策略' className={handlePanelValue !== '密码认证' ? 'disp-none' : ''}>
                            <CollapseDemo panelData={panelB}/>
                        </Form.Item>
                        <Form.Item label='登录时间策略'>
                            <CollapseDemo panelData={panelC}>
                                <Button type="primary">新增</Button>
                            </CollapseDemo>
                        </Form.Item>
                        <Form.Item label='登录失败策略'>
                            <CollapseDemo panelData={panelC}/>
                        </Form.Item>
                        <Form.Item>
                            <Button htmlType="submit">提交</Button>
                        </Form.Item>
                    </Card>
                </Form>
            </div>
        );
    }
}

export default AddUser;
