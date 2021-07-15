import React from "react";
import { Layout, Menu } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined,} from '@ant-design/icons';
import { Route, Redirect, Switch } from 'react-router-dom'
import Dashboard from '../Dashboard'
import Demo from '../Generators'
import UserGroup from  '../UserGroup'
import './index.styl'

const { Header, Sider, Content } = Layout;

class Main extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    handleChange=(string)=>{
        // this.props.history.push(string)
    }
    render() {
        return (
            <Layout>
                <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
                    <div className="logo" />
                    <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
                        <Menu.Item key="1" icon={<UserOutlined />} onClick={this.handleChange('/dashboard')}>
                            nav 1
                        </Menu.Item>
                        <Menu.Item key="2" icon={<VideoCameraOutlined />} onClick={this.handleChange('/demo')}>
                            nav 2
                        </Menu.Item>
                        <Menu.Item key="3" icon={<UploadOutlined />} onClick={this.handleChange('/usergroup')}>
                            nav 3
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout className="site-layout">
                    <Header className="site-layout-background" style={{ padding: 0 }}>
                        {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                            className: 'trigger',
                            onClick: this.toggle,
                        })}
                    </Header>
                    <Content
                        className="site-layout-background"
                        style={{
                            margin: '24px 16px',
                            padding: 24,
                            minHeight: 280,
                        }}
                    >
                        <Switch>
                            <Route path="/dashboard" component={Dashboard} />
                            <Route path="/demo" component={Demo} />
                            <Route path="/usergroup" component={UserGroup} />
                        </Switch>
                        Content
                    </Content>
                </Layout>
            </Layout>
        );
    }
}

export default Main
