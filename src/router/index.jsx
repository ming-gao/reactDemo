import React, { Component } from 'react' //引入核心
import { //引入路由相关配置
    HashRouter,  // 构建 hash 路由, #/home #/login  === ( Vue mode:hash )
    // BrowserRouter,// 构建 history 路由  /home /login === ( Vue mode:history )
    // Redirect, //重定向
    Route, //路由坑
    Switch //模糊匹配，箱单与Switch判断语句
} from 'react-router-dom'
//-------blog 自定义组件-------------------------

import Main from '../pages/Layout'

export default class Router extends Component {
    render() {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/" render={()=>
                        <Main />
                    }/>
                </Switch>
            </HashRouter>
        )
    }
}
