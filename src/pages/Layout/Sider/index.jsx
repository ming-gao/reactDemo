import React, { Component } from 'react' //引入react核心
import MenuArr from '../../router/list.js'//引入上面定义的假数据
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router'; //引入高阶组件

const { Sider } = Layout; //解构
const { SubMenu } = Menu;



class SideMenu extends Component { //组件
    state = {
        collapsed: false
    }
    //1、自己封装渲染函数，遍历侧边栏
    renderMenu = (menus)=>{ //BBB
        let {roleType} = JSON.parse(localStorage.getItem("token"))
        //2、roleType 当前登录用户的roleType(就是用户权限,从token中拿出来做判断，权限越高看的越多
        return menus.map(item=>{
            //3、提示：判断当前登录的用户的角色值（roleType），跟当前要渲染的侧边栏项需要的角色值进行对比
            if(item.children && roleType >= item.permission){ //4、判断是否有孩子参数，有就渲染二级标题，并且判断登入用户的权限是不是大于标题数据的权限，大于就渲染，小于就隐藏（就是数据中定义的permission）
                return <SubMenu key={item.path} title={ //重：将每个渲染的标题都设置key（就是数据中定义的path="/home"）用于做编程试导航和菜单高亮
                    <span>
                        <item.icon/>
                        <span>{item.title}</span>
                    </span>
                }>
                    {
                        //递归用法
                        this.renderMenu(item.children) //重：7、下面还有children在继续递归渲染，（就不需要每次都去做循环渲染）
                    }
                </SubMenu>
            }else{
                if( item.permission > roleType){ //6、判断登入的权限是否大于当前标题数据的权限，大于就显示，小于就隐藏。
                    return null
                }
                return ( //5、如果没有children孩子数据，就直接渲染一级标题，menu
                    <Menu.Item key={item.path} icon={<item.icon />}>重：将每个渲染的标题都设置key（就是数据中定义的path="/home"）用于做编程试导航和菜单高亮
                        {item.title}
                    </Menu.Item>
                )
            }
        })
    }

    handleChangePage = (obj)=>{  //AAA
        // console.log(obj)
        // 高阶组件提供
        this.props.history.push(obj.key)//key路由对应的路径,进行点击每一个标题的时候，条状到响应的路由去
    }
    render() {
        // console.log(this.props) //拿到此时路径
        let selectedKey = this.props.location.pathname  //设置defaultSelectedKeys
        let openKey = "/"+this.props.location.pathname.split("/")[1] //截取二级路由的一级路径，设置defaultOpenKeys
        return (
            <Sider trigger={null} collapsible collapsed={this.props.isCollapsed}>
                {/* <div className="logo" /> */}
                {
                    /*
                        andt组件库提供：defaultSelectedKeys ：高亮显示谁？//从编程试导航中结构出来path来，给到这个属性
                                       defaultOpenKeys：//初始展开的 SubMenu 菜单项 key 数组 （前提是渲染标题的时候，key要和解构出来的path相对应，不然初始化展开不起作用）
                    */
                }
                <Menu theme="dark" mode="inline" defaultSelectedKeys={[selectedKey]} defaultOpenKeys={[openKey]}
                      onClick ={this.handleChangePage} //AAA
                    //点击 MenuItem 调用此函数,会传递点击的是具体的哪一个值过去，就包含数据的path
                >
                    { //BBBB
                        this.renderMenu(MenuArr) //调用上面抽离的函数，渲染侧边栏，传递的值就是引入的假数据
                    }
                </Menu>
            </Sider>
        )
    }
}
// connec拿到了store, store.getState()
const mapStateToProps = state => {
    // console.log(state)
    return {
        name:"kerwin",
        a:1,
        isCollapsed:state.isCollapsed
    } //函数返回值 ，就是将来往sideMeun 组件传来的属性
}// 映射redux 状态==>当前组件属性


export default SideMenu
