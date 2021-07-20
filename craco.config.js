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
                            '@font-size-base': '14px',
                            // 颜色系列
                            // 按钮
                            '@btn-default-color': '#fff',
                            '@btn-padding-horizontal-sm': '8px',
                            '@btn-border-radius-sm': '3px',
                            '@btn-font-size-sm': '12px',
                            // layout系列
                            '@layout-header-background': '#001529',
                            '@layout-header-color': '#fff',
                            '@layout-header-padding': '0',
                            // table系列
                            '@table-font-size': '13px',
                            '@table-border-radius-base': '6px',
                            '@table-padding-vertical': '6px',
                            '@table-padding-horizontal': '0',
                            // input系列
                            '@input-height-base': '26px',
                            '@input-height-lg': '26px',
                            '@input-height-sm': '26px',
                        },

                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};
