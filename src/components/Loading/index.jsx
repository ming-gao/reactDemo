import React, { useEffect } from "react";
import { Spin } from "antd";
import NProgress from "nprogress"; // 页面加载进度条
import "nprogress/nprogress.css"; // 面加载进度条 样式

NProgress.configure({ showSpinner: false }); // NProgress 配置

const Loading = () => {
    useEffect(() => {
        NProgress.start();
        return () => {
            NProgress.done();
        };
    }, []);

    return (
        <div className="app-container">
            <Spin />
        </div>
    );
};

export default Loading;
