import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router'
import { Row, Col, Statistic, Card } from 'antd';
import DigitalCard from '../../components/DigitalCard'
import Echartsdemo from '../../components/Echartsdemo'
import Tablebasic from '../../components/Tablebasic'
import Scrollmessage from '../../components/Scrollmessage'
import Demo from "../Generators"
import { SoundOutlined, createFromIconfontCN  } from '@ant-design/icons';

import './Dashboard.styl'

const option = {
    series: [{
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 5,
        radius: "80%",
        center: ['50%', '60%'],
        axisLine: {
            lineStyle: {
                width: 6,
                color: [
                    [0.2, '#7CFFB2'],
                    [0.4, '#58D9F9'],
                    [0.6, '#4488BB'],
                    [0.8, '#FDDD60'],
                    [1, '#FF6E76']
                ]
            }
        },
        pointer: {
            icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
            length: '12%',
            width: 20,
            offsetCenter: [0, '-60%'],
            itemStyle: {
                color: 'auto'
            }
        },
        axisTick: {
            length: 6,
            distance: 2,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: 12,
            distance: 2,
            lineStyle: {
                color: 'auto',
                width: 3
            }
        },
        detail: {
            fontSize: 30,
            offsetCenter: [0, '80%'],
            valueAnimation: true,
            formatter: function (value) {
                return Math.round(value) + '%';
            },
            color: 'auto'
        },
        grid: {
            height: "75%",
            top: '10%'
        },
        data: [{
            value: 70,
            name: 'CPU使用率',
            title: {
                offsetCenter: [0, '-130%']
            }
        }]
    }]

}

const optionsLine = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['活跃用户', '登录次数'],
        orient: 'vertical',
        right: '10',
        top: '20%'
    },
    grid: {
        height: "75%",
        width:'80%',
        top: '10%',
        left: '50'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        name: '活跃用户',
        data: [1, 2, 4, 8, 1, 7, 2],
        type: 'line'
    },
    {
        name: '登录次数',
        data: [0, 3, 4, 8, 5, 7, 0],
        type: 'line'
    }]
}

const optionPie = {
    tooltip: {
        trigger: 'item'
    },

    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: ['50%', '70%'],
            data: [
                {value: 1048, name: '搜索引擎'},
                {value: 735, name: '直接访问'},
                {value: 580, name: '邮件营销'},
                {value: 484, name: '联盟广告'},
                {value: 300, name: '视频广告'}
            ],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
}

const IconFont = createFromIconfontCN({
    scriptUrl: '//at.alicdn.com/t/font_2662677_9x0hbl9my5.js',
});

class Dashboard extends Component {
    componentDidMount() {

    }

    onChartClick(param, echart) {
        console.log('onChartClick', param, echart)
    }

    onChartLegendSelectChanged(param, echart) {
        console.log('onLegendSelect', param, echart)
    }
    addUser=()=>{
        this.props.history.push('/user')
    }
    toUser=()=>{
        this.props.history.push('/adduser')
    }
    toUserGroup=()=>{
        this.props.history.push('/usergroup')
    }
    render() {
        const onEvents = {
            click: this.onChartClick,
            legendselectchanged: this.onChartLegendSelectChanged
        }
        return (
            <div className='P-home'>
                <Row className='P-scrollmessage' gutter={[10, 0]}>
                    <Col xs={24}
                         sm={24}
                         md={24}
                         lg={13}
                         xl={13}
                         className="M-scrollmessage">
                        <Card>
                            <Row>
                                <Col span={2} className='M-sound'><SoundOutlined style={{fontSize: '22px',color: '#000'}}/></Col>
                                <Col span={22}><Scrollmessage/></Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col xs={24}
                         sm={24}
                         md={24}
                         lg={11}
                         xl={11}
                         className="M-statistic">
                        <Card>
                            <div>累计访问平台</div>
                            <div className='card-cell'><span className='cell-title'>登录平台次数</span><span className='M-number'>123</span></div>
                            <div className='card-cell'><span className='cell-title'>访问资产次数</span><span className='M-number'>2133</span></div>
                        </Card>
                    </Col>
                </Row>

                <DigitalCard leftTitle="用户分布" buttonText="添加用户"
                             addUser={this.addUser}
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>}
                             rightOne={<Echartsdemo option={option} style={{height: '200px'}} onEvents={onEvents}/>}
                             rightTwo={<Echartsdemo option={option} style={{height: '200px'}} onEvents={onEvents}/>}
                             rightThree={<Echartsdemo option={option} style={{height: '200px'}} onEvents={onEvents}/>}
                             history={this.props.history}/>

                <DigitalCard leftTitle="资产接入" buttonText="添加资产" rightTitle="在线会话"
                             addUser={this.toUser}
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>} right={<Tablebasic/>} history={this.props.history}/>

                <DigitalCard leftTitle="授权统计" buttonText="授权资产" rightTitle="用户活跃程度(近一周)"
                             addUser={this.toUserGroup}
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>}
                             right={<Echartsdemo option={optionsLine} onEvents={onEvents}/>} history={this.props.history}/>

            </div>
        );
    }
}

export default Dashboard;
