import React, {Component} from 'react';
import Form from "@rjsf/core";
import { Collapse } from 'antd';

import './ConditionalSearch.styl'

const { Panel } = Collapse;



const schema = {
    title: "Todo",
    type: "object",
    required: ["title"],
    properties: {
        title: { type: "string", title: "Title", default: "A new task" },
        done: { type: "boolean", title: "Done?", default: false } } };



const log = type => console.log.bind(console, type);

class ConditionalSearch extends Component {
    render() {
        return (
            <Collapse bordered={false} defaultActiveKey={['1']}>
                <Panel header="This is panel header 1" key="1">
                    <Form schema={schema} onChange={log} onSubmit={log} onError={log}/>
                </Panel>

            </Collapse>
        );
    }
}

export default ConditionalSearch;
