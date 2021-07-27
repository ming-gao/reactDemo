import React, {Component} from 'react';
import {Radio, Row, Col,Button} from 'antd';

import {DownOutlined, UpOutlined} from '@ant-design/icons';

import './CollapseDemo.less'


function onChange(e) {
    console.log(`radio checked:${e.target.value}`);
}

class CollapseDemo extends Component {
    state = {
        isCollapsed:true,

    }
    isElementCollision(){

    }
    clickToCollapse=()=>{
        const {isCollapsed} = this.state;
        this.setState({isCollapsed:!isCollapsed})
        console.log('123')
    }
    render() {
        const {panelData} = this.props
        const {isCollapsed} = this.state;
        let panel = panelData.map((item) => (
            <Col className="gutter-row" xs={12} sm={12} md={12} lg={12} xl={12}>
                <Radio.Button value={item.text}>
                    {item.text}
                </Radio.Button>
            </Col>
        ))
        return (
            <Row>
                <Col className={isCollapsed?'collapsed':'expanded'} style={{overflow:'hidden'}} >
                    <Radio.Group onChange={onChange}  buttonStyle="solid">
                        <Row>
                            {panel}
                        </Row>
                    </Radio.Group>
                </Col>
                <Col >
                    <Button onClick={()=>this.clickToCollapse()} type="default" shape="circle" icon={isCollapsed?<DownOutlined />:<UpOutlined />} />
                </Col>
            </Row>
        );
    }
}

export default CollapseDemo;
