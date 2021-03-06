import React, {useState} from "react";
import {Tree,Modal,Input,message,Popconfirm} from "antd";
import {
    EditOutlined,
    PlusOutlined,
    MinusOutlined,
    CloseOutlined,
    CheckOutlined,
    UsergroupAddOutlined
} from "@ant-design/icons";

import {nanoid} from "nanoid";
import './edit.less'

const {TreeNode} = Tree;

const treeData = [
    {
        value: "0",
        defaultValue: "0",
        key: "0",
        parentKey: '0',
        isEditable: false,
        icon: <UsergroupAddOutlined />,
        children: [
            {
                value: "0-1",
                key: "0-1",
                defaultValue: "0-1",
                icon: <UsergroupAddOutlined />,
                switcherIcon:<UsergroupAddOutlined />,
                isEditable: false,
            },
            {
                value: "0-2",
                key: "0-2",
                defaultValue: "0-2",
                icon: <UsergroupAddOutlined />,
                switcherIcon:<UsergroupAddOutlined />,
                isEditable: false,
            },

        ],
    },
];

const expandedKeyArr = ["0"];
export default function TreeDemo() {
    const [data, setData] = useState(treeData);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [key,setKey] = useState('')
    const [title,setTitle] = useState('')
    const [expandedKeys, setExpandedKeys] = useState(expandedKeyArr);

    const renderTreeNodes = (data) => {

        let nodeArr = data.map((item) => {
            if (item.isEditable) {
                item.title = (
                    <div>
                        <input value={item.value || ''} onChange={(e) => onChange(e, item.key)}/>
                        <CloseOutlined
                            style={{marginLeft: 10}}
                            onClick={() => onClose(item.key, item.defaultValue)}
                        />

                        <CheckOutlined
                            style={{marginLeft: 10}}
                            onClick={() => onSave(item.key)}
                        />
                    </div>
                );
            } else {
                item.title = (
                    <div className="tree-item">
                        <span>{item.value}</span>
                        <span className="tree-control">
                            <Popconfirm
                                title="?????????????????????????"
                                onConfirm={popConfirmEdit}
                                onCancel={cancel}
                                okText="??????"
                                cancelText="??????"
                            >
                                <EditOutlined className="icon-hover" style={{marginLeft: 10}} onClick={() => onEdit(item.key)}/>
                            </Popconfirm>

                            <PlusOutlined className="icon-hover" style={{marginLeft: 10}} onClick={() => onAdd(item.key)}/>
                            {item.parentKey === "0" ? null : (
                                <Popconfirm
                                    title="???????????????????"
                                    onConfirm={popConfirmDel}
                                    onCancel={cancel}
                                    okText="??????"
                                    cancelText="??????"
                                >
                                <MinusOutlined className="icon-hover" style={{marginLeft: 10}} onClick={() => onDelete(item.key)}/>
                                </Popconfirm>
                            )}
                        </span>
                        <Modal title="????????????" width={200} visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                            <Input placeholder="??????????????????" onChange={(e)=>handleChange(e)}/>
                        </Modal>
                    </div>
                );
            }

            if (item.children) {
                return (
                    <TreeNode title={item.title} key={item.key} dataRef={item}>
                        {renderTreeNodes(item.children)}
                    </TreeNode>
                );
            }

            return <TreeNode title={item.title} key={item.key}/>;
        });


        return nodeArr;
    };
    const onExpand = (expandedKeys) => {
        //???????????????key???
        setExpandedKeys(expandedKeys);
    };
    const handleOk = () => {
        setIsModalVisible(false);
        console.log(title)
        addNode(key, treeData,title);
        //useState??????????????????immutable ????????????????????????????????????????????????slice()??????????????????????????????
        setData(treeData.slice());
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const popConfirmEdit=()=>{
        editNode(key, treeData);
        setData(treeData.slice());
    }
    const popConfirmDel=()=>{
        deleteNode(key, treeData);
        setData(treeData.slice());
        message.success('????????????')
    }
    const cancel=()=>{

    }
    const handleChange=(e) => {
        setTitle(e.target.value)
    }
    const onAdd = (key) => {
        if (expandedKeys.indexOf(key) === -1) {
            expandedKeyArr.push(key);
        }
        setExpandedKeys(expandedKeyArr.slice());
        setIsModalVisible(true);
        setKey(key);
    };

    const onEdit = (key) => {
        setKey(key);
    };

    const editNode = (key, data) =>
        data.forEach((item) => {
            if (item.key === key) {
                item.isEditable = true;
            } else {
                item.isEditable = false;
            }
            // item.value = item.defaultValue; // ?????????????????????????????????????????????????????????????????????????????????????????????????????????????????????value ??????????????? defaultvalue
            if (item.children) {
                editNode(key, item.children);
            }
        });

    const addNode = (key, data,title) =>
        data.forEach((item,i=0) => {
            console.log(i++,title)
            if (item.key === key) {
                if (item.children) {
                    item.children.push({
                        value: title,
                        defaultValue:title,
                        key: nanoid(), // ?????? key ??????????????????
                        icon:<UsergroupAddOutlined />,
                        switcherIcon:<UsergroupAddOutlined />,
                    });
                } else {
                    item.children = [];
                    item.children.push({
                        value: title,
                        defaultValue:title,
                        key: nanoid(),
                        icon:<UsergroupAddOutlined />,
                        switcherIcon:<UsergroupAddOutlined />,
                    });
                }
                return;
            }
            if (item.children) {
                addNode(key, item.children,title);
            }
        });

    const onChange = (e, key) => {
        changeNode(key, e.target.value, treeData);
        setData(treeData.slice());
    };

    const changeNode = (key, value, data) =>
        data.forEach((item) => {
            if (item.key === key) {
                item.value = value;
            }
            if (item.children) {
                changeNode(key, value, item.children);
            }
        });

    const onSave = (key) => {
        saveNode(key, treeData);
        setData(treeData.slice());
    };

    const saveNode = (key, data) =>
        data.forEach((item) => {
            if (item.key === key) {
                item.defaultValue = item.value;
            }
            if (item.children) {
                saveNode(key, item.children);
            }
            item.isEditable = false;
        });

    const onClose = (key, defaultValue) => {
        closeNode(key, defaultValue, treeData);
        setData(treeData);
    };

    const closeNode = (key, defaultValue, data) =>
        data.forEach((item) => {
            item.isEditable = false;
            if (item.key === key) {
                item.value = defaultValue;
            }
            if (item.children) {
                closeNode(key, defaultValue, item.children);
            }
        });

    const onDelete = (key) => {
        setKey(key)
    };

    const deleteNode = (key, data) =>
        data.forEach((item, index) => {
            console.log(item,key)
            if (item.key === key) {
                data.splice(index, 1);
                return;
            } else {
                if (item.children) {
                    deleteNode(key,item.children)
                }
            }
        });

    return (
        <div>
            <Tree expandedKeys={expandedKeys} showLine checkable showIcon={true} onExpand={onExpand}>
                {renderTreeNodes(data)}
            </Tree>
        </div>
    );
}

