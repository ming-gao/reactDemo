import React, {Component} from 'react';
import {Button, Modal, Space, message} from "antd";
import { PlusOutlined,DeleteOutlined,LockOutlined,UnlockOutlined,ImportOutlined,ExportOutlined,KeyOutlined,ToolOutlined, } from '@ant-design/icons';

export default class Modalbasic extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        buttonData: []
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

    componentDidMount() {
        this.setState({buttonData: this.props.buttonData})
        console.log(this.props.buttonData)
    }

    render() {
        const {visible, confirmLoading} = this.state;
        let Space = this.state.buttonData.map((item, index) => {
                return <Button key={index} size='small' icon={React.createElement(item.icon)} type="primary" style={{backgroundColor: item.color}}>{item.name}</Button>
            }
        )
        return (
            <div>
                {Space}

            </div>
        );
    }
}
