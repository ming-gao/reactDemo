import React, {Component, useState, useEffect, useRef} from 'react';
import 'editable-tree-antd/lib/styles/icon-font/iconfont.css';
import 'editable-tree-antd/lib/styles/editable-tree.css';

import EditableTree from 'editable-tree-antd';

const treeData = [
    {
        nodeName: '出版者',
        id: '出版者', // unique id, required
        nameEditable: true, // is level editable (name), default true
        valueEditable: true, // is level editable (value), default true
        nodeDeletable: true, // is level deletable, default true
        nodeValue: [
            {
                nodeName: '出版者描述',
                isInEdit: true, // is level in edit.jsx status
                id: '出版者描述',
                nodeValue: [
                    {
                        nodeName: '出版者名称',
                        id: '出版者名称',
                        nodeValue: '出版者A',
                    },
                    {
                        nodeName: '出版者地',
                        id: '出版者地',
                        valueEditable: false,
                        nodeValue: '出版地B1',
                    },
                ],
            }
        ],
    },
];

class Tree extends Component {
    render() {
        return (
            <EditableTree
                data={treeData} // see demo data above
                maxLevel={10} // tree max level limitation, default 50
                enableYaml={false} // enable parse yaml string, default false
                lang="en_US" // default zh_CN
                onDataChange={this.onDataChange} // data change listener
            />
        );
    }
}

export default Tree;