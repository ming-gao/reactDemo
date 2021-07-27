import React, {Component} from 'react';
import {Radio, Row, Col,Button} from 'antd';

import {DownOutlined, UpOutlined} from '@ant-design/icons';

import './CollapseDemo.less'


class CollapseDemo extends Component {
    state = {
        isCollapsed:true,

    }
    isElementCollision(){

    }
    componentDidMount() {

    }

    clickToCollapse=()=>{
        const {isCollapsed} = this.state;
        this.setState({isCollapsed:!isCollapsed})
        console.log('123')
    }
    handleChange=(e)=>{
        console.log(`radio checked:${e.target}`);
        this.props.getData(e.target.value)
        this.props.onChange(e.target.value)

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
            <Row wrap={false}>
                <Col className={isCollapsed?'collapsed':'expanded'} style={{overflow:'hidden'}} span={20}>
                    <Radio.Group onChange={this.handleChange} defaultValue={panelData[0].text} buttonStyle="solid">
                        <Row>
                            {panel}
                            {this.props.children}
                        </Row>
                    </Radio.Group>
                </Col>
                <Col span={4}>
                    <Button onClick={()=>this.clickToCollapse()} type="default" shape="circle" icon={isCollapsed?<DownOutlined />:<UpOutlined />} />
                </Col>
            </Row>
        );
    }
}

export default CollapseDemo;
