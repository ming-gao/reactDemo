import React, {Component} from 'react';
import {MenuFoldOutlined, MenuUnfoldOutlined, UserOutlined} from "@ant-design/icons";
import {Layout, Menu} from "antd";
import { withRouter } from 'react-router-dom'
import menuList from "../../../config/menuConfig";
import {Link} from "react-router-dom";

import './sider.styl'

const { Sider } = Layout;
const {SubMenu} = Menu

class SiderMenu extends Component {
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
        const path =this.props.location.pathname;
        return (
            <Sider style={{zIndex:'10'}} trigger={null} collapsible collapsed={collapsed} onCollapse={this.onCollapse} breakpoint='lg'>
                <div className="menu-fold" >
                    {React.createElement(this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: this.toggle,
                    })}
                </div>
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[path]}
                      style={{position: 'fixed',top: '104px',width: 'inherit'}}
                >
                    {
                        this.getMenuNodes(menuList)
                    }
                </Menu>
            </Sider>
        );
    }
}

export default withRouter(SiderMenu);
