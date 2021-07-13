import React, {Component} from 'react';
import {Button, Modal, Space, message} from "antd";
import { PlusOutlined,DeleteOutlined,LockOutlined,UnlockOutlined,ImportOutlined,ExportOutlined,KeyOutlined,ToolOutlined, } from '@ant-design/icons';

import './modalbasic.styl'

export default class Modalbasic extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        buttonData: {},
        test:'<PlusOutlined />'
    }
    showModal = (userMessage) => {
        message.warning(userMessage);
        this.setState({visible: true})
    }
    handleOk = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 500);
    };
    handleCancel = () => {
        this.setState({visible: false});
    };
    componentWillMount() {

    }

    componentDidMount() {
        this.setState({buttonData: this.props})
        console.log(this.props)
    }

    render() {
        const {visible, confirmLoading} = this.state
        const {color,name}=this.props
        return (
            <div>
                <Button className="M-button" onClick={this.showModal} size='small' icon={<PlusOutlined />} type="default" style={{backgroundColor: color}}>{name}</Button>
            </div>
        );
    }
}
