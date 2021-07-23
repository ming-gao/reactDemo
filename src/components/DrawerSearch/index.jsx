import React, {Component} from 'react';
import {Drawer,Button} from 'usue-cc';
import {MenuUnfoldOutlined, CaretRightOutlined} from '@ant-design/icons';

class DrawerSearch extends Component {
    state = {
        visible: false,
    }
    showDrawer = () => {
        this.state.visible=!this.state.visible
    };
    onClose = () => {
        this.state.visible=false
    };

    render() {
        const {visible, setVisible} = this.state;
        return (
            <div className="site-drawer-render-in-current-wrapper">
                <div style={{float: 'left', marginBottom: 16}}>
                    <Button type="primary" onClick={this.showDrawer}
                            style={{marginLeft: 365, height: 34, marginTop: 100}}>点击从左侧滑出</Button>
                </div>
                <Drawer
                    placement="left"
                    closable={false}
                    onClose={this.onClose}
                    visible={visible}
                    getContainer={false}
                    mask={false}
                    style={{position: 'absolute'}}
                    footer={
                        <div>
                            <Button onClick={this.onClose} type="link" style={{marginRight: 8}}>
                                重置
                            </Button>
                            <Button onClick={this.onClose} type="primary" size="large" style={{float: 'right'}}>
                                确定
                            </Button>
                        </div>
                    }
                >
                </Drawer>
            </div>
        );
    }
}

export default DrawerSearch;
