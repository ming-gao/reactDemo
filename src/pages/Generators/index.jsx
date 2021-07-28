import React from 'react';
import {Breadcrumb, DatePicker, Drawer, Button } from 'usue-cc';
import Generator from 'fr-generator';
import locale from 'antd/es/date-picker/locale/zh_CN';

import { MenuUnfoldOutlined, CaretRightOutlined } from '@ant-design/icons';

const defaultValue = {
    type: 'object',
    properties: {
        inputName: {
            title: '简单输入框',
            type: 'string',
        },
    },
};

const Demo = () => {
    const [visible, setVisible] = React.useState(false);
    const showDrawer = () => {
        setVisible(!visible)
    }
    const onClose = () => {
        setVisible(false)
    }
    return (
        <div style={{ height: '80vh' }}>
            <Breadcrumb>
                <Breadcrumb.Item>首页</Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="#">组件</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <a href="#">一般</a>
                </Breadcrumb.Item>
                <Breadcrumb.Item>面包屑</Breadcrumb.Item>
            </Breadcrumb>
            <DatePicker locale={locale} showTime />
            <div style={{float:'right',marginBottom:16}}>
                <MenuUnfoldOutlined onClick={showDrawer} className="filt" style={{color:'#8C8C8C',padding:10,border:'1px solid rgba(162,163,167,0.50)',marginLeft:10,height:34}} />
            </div>
            <Drawer
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                getContainer={false}
                mask={false}
                style={{ position: 'absolute' }}
                footer={
                    <div>
                        <Button onClick={onClose} type="link" style={{ marginRight: 8 }}>
                            重置
                        </Button>
                        <Button onClick={onClose} type="primary" size="large" style={{ float:'right' }}>
                            确定
                        </Button>
                    </div>
                }
            >
            </Drawer>
            <Generator defaultValue={defaultValue} />
        </div>
    );
};

export default Demo;
