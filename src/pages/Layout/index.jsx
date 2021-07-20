import React from "react";
import {Layout, Menu, Breadcrumb } from 'antd';
import {MenuUnfoldOutlined, MenuFoldOutlined, UserOutlined, VideoCameraOutlined, UploadOutlined,} from '@ant-design/icons';
import { Route, Redirect, Switch,Link } from 'react-router-dom'
import menuList from '../../config/menuConfig'
import Dashboard from '../Dashboard'
import Demo from '../Generators'
import UserGroup from  '../UserGroup'
import User from '../User'
import './index.less'

const { Header, Sider, Content } = Layout;
const {SubMenu} = Menu

class Main extends React.Component {
    state = {
        collapsed: false,
    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };

    // 根据配置文件生成侧边栏导航列表
    getMenuNodes=(menuList)=>{
        return menuList.map(item => {
            if (!item.children){
                return (
                    <Menu.Item key={item.key} icon={<UserOutlined />} >
                        <Link to={item.key}>
                            {item.name}
                        </Link>
                    </Menu.Item>
                )
            } else {
                return (
                    <SubMenu key={item.key} icon={<UserOutlined />} title={item.name}>
                        {
                            this.getMenuNodes(item.children)
                        }
                    </SubMenu>
                )
            }
        })
    }
    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };
    render() {
        const { collapsed } = this.state;
        return (
            <Layout>
                <Header className="site-layout-background" >
                    <div className="logo" />
                </Header>
                <Layout className="site-layout">
                    <Sider className="P-sider" trigger={null} collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint='lg'>
                        <div className="menu-fold" >
                            {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                                className: 'trigger',
                                onClick: this.toggle,
                            })}
                        </div>
                        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}
                            style={{position: 'fixed',top: '104px'}}
                        >
                            {
                                this.getMenuNodes(menuList)
                            }
                        </Menu>
                    </Sider>
                    <Layout className="rightContent">
                        <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb>
                        <Content
                            className="site-layout-background"
                            style={{
                                minHeight: 280,
                            }}
                        >
                            <Switch>
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/dashboard" component={Dashboard} />
                                <Route path="/demo" component={Demo} />
                                <Route path="/usergroup" component={UserGroup} />
                                <Route path="/user" component={User} />
                            </Switch>
                        </Content>
                    </Layout>
                </Layout>
            </Layout>
        );
    }
}

export default Main
