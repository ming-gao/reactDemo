const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            // 基础样式

                            // 颜色系列
                            '@primary-color': '#1DA57A' ,
                            // 字体系列
                            '@btn-font-size-sm': '12px',
                            // 按钮
                            '@btn-default-color': '#fff',
                            '@btn-padding-horizontal-sm': '8px',
                            '@btn-border-radius-sm': '3px'
                        },

                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
