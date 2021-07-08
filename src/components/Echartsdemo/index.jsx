import React, {Component} from 'react';
import * as echarts from 'echarts/lib/echarts'
import PropTypes from 'prop-types';
import elementResizeEvent from 'element-resize-event'
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import 'echarts/lib/component/title';
import { GaugeChart } from 'echarts/charts';

import {GridComponent} from 'echarts/components'
import { LineChart } from 'echarts/charts';
import {LegendComponent} from 'echarts/components';

echarts.use([GaugeChart]);
echarts.use([LegendComponent]);
echarts.use([GridComponent]);
echarts.use([LineChart]);

export default class Echartsdemo extends Component {
    echartsInstance = echarts // echarts object
    echartsElement = null // echarts dom

    static propTypes = {
        option: PropTypes.object.isRequired,
        echarts: PropTypes.object.isRequired,
        notMerge: PropTypes.bool,
        lazyUpdate: PropTypes.bool,
        style: PropTypes.object,
        className: PropTypes.string,
        theme: PropTypes.string,
        showLoading: PropTypes.bool,
        loadingOption: PropTypes.object,
    }
    static defaultProps={
        echarts: {},
        notMerge: false,
        lazyUpdate: false,
        style: {height: '168px'},
        className: '',
        theme: null,
        showLoading: false,
        loadingOption: null,
    }
    componentDidMount() {
        const echartObj = this.renderEchartDom()
        const onEvents = this.props.onEvents || {}
        this.bindEvents(echartObj, onEvents)
        // on resize
        elementResizeEvent(this.echartsElement, () => {
            echartObj.resize()
        })
        console.log(window.animation)
    }

    bindEvents = (instance, events) => {
        const _loopEvent = (eventName) => {
            if (typeof eventName === 'string' && typeof events[eventName] === 'function') {
                instance.off(eventName)
                instance.on(eventName, (param) => {
                    console.log(param)
                })
            }
        }

        for (const eventName in events) {
            if (Object.prototype.hasOwnProperty.call(events, eventName)) {
                _loopEvent(eventName)
            }
        }
    }

    // update
    componentDidUpdate() {
        this.renderEchartDom()
    }

    // 3. 组件unmount时销毁相关echarts实例
    componentWillUnmount() {
        if (this.echartsElement) {
            if (typeof elementResizeEvent.unbind === 'function') {
                elementResizeEvent.unbind(this.echartsElement)
            }
            this.echartsInstance.dispose(this.echartsElement)
        }
    }

    // 1. theme主题定制
    getEchartsInstance = () => this.echartsInstance.getInstanceByDom(this.echartsElement) || this.echartsInstance.init(this.echartsElement, this.props.theme);
    // render the dom
    renderEchartDom = () => {
        // init the echart object
        const echartObj = this.getEchartsInstance()
        // 2. 完善echarts.setOption()方法能力，增加`notMerge`, `lazyUpdate`参数
        echartObj.setOption(this.props.option, this.props.notMerge || false, this.props.lazyUpdate || false)
        // 4. 实现加载动画效果，当数据量大或者异步的时候，显示Loading
        if (this.props.showLoading) echartObj.showLoading(this.props.loadingOption || null)
        else echartObj.hideLoading()
        return echartObj
    }
    render() {
        const style = this.props.style || {
            height: '200px'
        }
        // for render
        return (
            <div
                ref={(e) => { this.echartsElement = e }}
                style={style}
                className={this.props.className}
            />
        )
    }
}
