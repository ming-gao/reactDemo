import React, {Component} from 'react';

import './home.styl'
import DigitalCard from '../../components/DigitalCard'
import Pie from '../../components/Pie'
import Line from '../../components/Line'
import Gauge from '../../components/Gauge'
import Echartsdemo from '../../components/Echartsdemo'

const option = {
    series: [{
        type: 'gauge',
        startAngle: 225,
        endAngle: -45,
        min: 0,
        max: 100,
        splitNumber: 5,
        radius: "100%",
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
            distance:2,
            lineStyle: {
                color: 'auto',
                width: 2
            }
        },
        splitLine: {
            length: 12,
            distance:2,
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
            top:'10%'
        },
        data: [{
            value: 70,
        }]
    }]

}

const optionsLine = {
    tooltip: {
        trigger: 'axis'
    },
    legend: {
        data: ['最高气温', '最低气温']
    },
    grid: {
        height: "75%",
        top:'10%'
    },
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [150, 230, 224, 218, 135, 147, 260],
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
            radius: ['50%','70%'],
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

class Home extends Component {
    goUser() {
        this.props.history.push('/user')
    }

    componentDidMount() {

    }

    onChartClick(param, echart) {
        console.log('onChartClick', param, echart)
    }

    onChartLegendSelectChanged(param, echart) {
        console.log('onLegendSelect', param, echart)
    }

    render() {
        const onEvents = {
            click: this.onChartClick,
            legendselectchanged: this.onChartLegendSelectChanged
        }
        return (
            <div className='P-home'>
                <DigitalCard leftTitle="用户分布" buttonText="添加用户"
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>}
                             rightOne={<Echartsdemo option={option} onEvents={onEvents}/>}
                             rightTwo={<Echartsdemo option={option} onEvents={onEvents}/>}
                             rightThree={<Echartsdemo option={option} onEvents={onEvents}/>}/>

                <DigitalCard leftTitle="资产接入" buttonText="添加资产" rightTitle="在线会话"
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>}/>

                <DigitalCard leftTitle="授权统计" buttonText="授权资产" rightTitle="用户活跃程度(近一周)"
                             left={<Echartsdemo option={optionPie} onEvents={onEvents}/>}
                             right={<Echartsdemo option={optionsLine} onEvents={onEvents}/>}/>

                <button onClick={() => {
                    this.goUser()
                }}>跳转至User页面
                </button>
            </div>
        );
    }
}

export default Home;
