import React, {Component} from 'react';
import { Card, Col, Row, Button,  Skeleton, Switch } from 'antd';
// import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

import './digitalCard.styl'

const { Meta } = Card;

class DigitalCard extends Component {
    state = {
        loading: true,
    };
    addUser() {
        this.props.history.push('/user')
    }
    render() {
        return (
            <div className="M-digitalCard">
                <Row gutter={16}>
                    <Col span={8}>
                        <Card title={this.props.leftTitle} headStyle={{borderBottom:'0'}} extra={<Button size="small" onClick={() => {this.addUser()}}>{this.props.buttonText}</Button>} >
                            {this.props.left}
                        </Card>
                    </Col>
                    <Col span={16}>
                        <Card title={this.props.rightTitle} headStyle={{borderBottom:'0'}} className="M-rightCard">
                            {this.props.right}
                            <Row>
                                <Col span={8}>{this.props.rightOne}</Col>
                                <Col span={8}>{this.props.rightTwo}</Col>
                                <Col span={8}>{this.props.rightThree}</Col>
                            </Row>

                        </Card>
                    </Col>
                </Row>
            </div>

        );
    }
}

export default DigitalCard;
