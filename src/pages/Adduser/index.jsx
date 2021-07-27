import React, {Component} from 'react';
import {Card, Form, Input, DatePicker, TimePicker, Select, Cascader, InputNumber, Radio, Space, Button} from 'antd';

// import {} from '@ant-design/icons';

import {getPanelData} from '../../api/user'

import DrawerSearch from "../../components/DrawerSearch";
import CollapseDemo from "../../components/CollapseDemo";
import TextContainer from "../../components/CollapseDemo/test"

import './adduser.less'
import {Link} from "react-router-dom";

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

const content = '这意味着变量$highlight-color现在的值是#F90。任何可以用作css属性值的赋值都 可以用作sass的变量值，甚至是以空格分割的多个属性值，如$basic-border: 1px solid black;，或以逗号分割的多个属性值，如$plain-font: "Myriad Pro"、Myriad、"Helvetica Neue"、Helvetica、"Liberation Sans"、Arial和sans-serif; sans-serif;。这时变 量还没有生效，除非你引用这个变量——我们很快就会了解如何引用。与CSS属性不同，变量可以在css规则块定义之外存在。当变量定义在css规则块内，那么该变量只能在此规则块内使用。如果它们出现在任何形式的{...}块中（如@media或者@font-face块），情况也是如此：'
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
        value1:'男',
        value2:'是',
        isActive: false,
        pickerOpen: false,
        panelData: [],
        buttonValue:'',
        handlePanelValue:'',  //折叠面板选中的值
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
        this.setState({isActive: !isActive,buttonValue:e.target.innerHTML.replace(/\s*/g,"")});
    }
    getData = (data) => {
        console.log(data)
        this.setState({handlePanelValue:data})
    }
    onSubmit=(formData)=>{
        if (formData.auth===undefined){
            formData.auth='default'
        }
        // formData.forever=this.state.buttonValue
        console.log(formData)
    }

    render() {

        const onFinish = values => {
            console.log('Received values of form:', values);
        };

        const handleChange = () => {
            this.formRef.current.setFieldsValue({sights: []});
        };

        const {value1, value2, pickerOpen, handlePanelValue} = this.state
        return (
            <div>
                <Form {...formItemLayout} onFinish={this.onSubmit}>
                    <Card title="用户信息" className="P-card P-card-userinfo" bordered={false}>
                        <Form.Item
                            label=" 用户ID"
                            name="userid"
                            validateStatus=""
                            help="不超过20个字符，可包括字母、数字和两个特殊字符“-_”,必须以字母或数字开头和结尾，字母必须小写"
                        >
                            <Input placeholder="" id="userinfo"/>
                        </Form.Item>

                        <Form.Item label="用户姓名" validateStatus="" name="username"
                                   help="不超过25个字符，只允许包含字母、汉字、数字、下划线和“.”"
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

                        <Form.Item label="有效期" hasFeedback validateStatus="" style={{marginBottom: 0}} name="fdl">
                            <Form.Item
                                name="forever"
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
                            <Form.Item name="forever" style={{display: 'inline-block', width: 'calc(50% - 12px)'}}>
                                <DatePicker
                                    onOpenChange={this.datePicker}
                                    open={pickerOpen}
                                    style={{
                                        width: '100%',
                                    }}
                                />
                            </Form.Item>
                        </Form.Item>
                        <Form.Item label="Error" hasFeedback validateStatus="" name="gender">
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
                            hasFeedback
                            validateStatus=""
                            name="isEncy"
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

                        <Form.Item label="手机" hasFeedback validateStatus="" help="请输入11位手机号" name="mobilephone">
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
                        <div className={handlePanelValue!=='密码认证'?'disp-none':''}>
                            <Form.Item
                                label="登录密码"
                                name="pwd"
                                validateStatus=""
                            >
                                <Input placeholder="" id="pwd"/>
                            </Form.Item>
                            <Form.Item
                                label="确认密码"
                                name="confirmPaw"
                                validateStatus=""
                            >
                                <Input placeholder="" id="confirmPaw"/>
                            </Form.Item>
                        </div>


                        <Form.Item label='帐号密码策略' className={handlePanelValue!=='密码认证'?'disp-none':''}>
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
