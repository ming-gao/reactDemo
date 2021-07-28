import React, {Component} from 'react';
import { Card, Col, Row, Button } from 'antd';

import './digitalCard.css'

class DigitalCard extends Component {
    state = {
        loading: true,
    };
    buttonAction() {
        this.props.addUser()
    }
    render() {
        return (
            <div className="M-digitalCard">
                <Row gutter={8}>
                    <Col
                         xs={24}
                         sm={24}
                         md={24}
                         lg={8}
                         xl={8}
                    >
                        <Card title={this.props.leftTitle} headStyle={{borderBottom:'0'}} extra={<Button size="small" onClick={() => {this.buttonAction()}}>{this.props.buttonText}</Button>} >
                            {this.props.left}
                        </Card>
                    </Col>
                    <Col
                        xs={24}
                        sm={24}
                        md={24}
                        lg={16}
                        xl={16}
                    >
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
