import React, {Component} from 'react';
import {Collapse, Radio} from 'antd';

import './CollapseDemo.less'

const {Panel} = Collapse;

const options = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear'},
];
const options2 = [
    {label: 'Apple', value: 'Apple'},
    {label: 'Pear', value: 'Pear'},
    {label: 'Orange', value: 'Orange'},
];

class CollapseDemo extends Component {
    state = {
        value: '',
        value2: ''
    }
    onChange = e => {
        console.log('radio4 checked', e.target.value);
        this.setState({
            value: e.target.value,
        });
    };

    render() {
        return (
            <Collapse defaultActiveKey={['1']} ghost className="M-collapse" expandIconPosition="right">
                <Panel header={(
                    <div>
                        <label htmlFor="">认证方式策略 ：</label>
                        <Radio.Group
                            className="M-radio-button"
                            options={options}
                            onChange={this.onChange}
                            value={this.state.value}
                            optionType="button"
                            buttonStyle="solid"
                        />
                    </div>
                )} key="1">
                    <Radio.Group
                        className="M-radio-button-inner"
                        options={options2}
                        onChange={this.onChange}
                        value={this.state.value2}
                        optionType="button"
                        buttonStyle="solid"
                    />
                </Panel>
            </Collapse>
        );
    }
}

export default CollapseDemo;
