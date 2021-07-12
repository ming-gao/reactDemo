import React, {Component} from 'react';
import {Button, Modal, Space, message} from "antd";

export default class Modalbasic extends Component {
    state = {
        visible: false,
        confirmLoading: false,
        buttonData:[]
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
        this.setState({buttonData:this.props.buttonData})
        console.log(this.props.buttonData)
    }

    render() {
        const {visible, confirmLoading} = this.state;
        let Space = this.state.buttonData.map((item, index) => {
                return <Space key={index}>
                    <Button type="primary" onClick={this.showModal(item.message)}>
                        {item.name}
                    </Button>
                </Space>
            }
        )
        let Modal = this.props.buttonData.map((item, index) => {
            return <Modal
                key={index}
                title="执行动作"
                visible={visible}
                onOk={this.handleOk}
                confirmLoading={confirmLoading}
                onCancel={this.handleCancel}
            >
                <p>{item.modal}</p>
            </Modal>

        })
        return (
            <div>
                {Space}
                {Modal}
            </div>

        );
    }

    // render() {
    //     let citys = this.state.citys.map((city) => {
    //
    //         return <span key={city}>{city}</span>
    //
    //     })
    //
    //     return (
    //         <div>
    //             {
    //                 citys
    //             }
    //         </div>
    //     );
    // }
}
