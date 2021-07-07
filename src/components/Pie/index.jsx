import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import  'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { GridComponent } from 'echarts/components'
import { BarChart } from 'echarts/charts';
import { LegendComponent } from 'echarts/components';

echarts.use([GridComponent]);
echarts.use([BarChart]);
echarts.use([LegendComponent]);

class Pie extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('pie-chart'));
        myChart.setOption({
            tooltip: {
                trigger: 'item'
            },
            legend: {
                top: '5%',
                left: 'center'
            },
            series: [
                {
                    name: '访问来源',
                    type: 'pie',
                    radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: {
                        show: false,
                        position: 'center'
                    },
                    emphasis: {
                        label: {
                            show: true,
                            fontSize: '17',
                            fontWeight: 'bold'
                        }
                    },
                    labelLine: {
                        show: false
                    },
                    data: [
                        {value: 1048, name: '搜索引擎'},
                        {value: 735, name: '直接访问'},
                        {value: 580, name: '邮件营销'},
                        {value: 484, name: '联盟广告'},
                        {value: 300, name: '视频广告'}
                    ]
                }
            ]
        });
    }
    render() {
        return (
            <div id="pie-chart" style={{width: 200, height: 200}}/>
        );
    }
}

export default Pie;
