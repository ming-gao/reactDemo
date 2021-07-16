const menuList=[
    {
        key: 'dashboard',
        name:'仪表盘',
        icon: ''
    },
    {
        key: 'userManagement',
        name:'用户管理',
        icon: '',
        children:[
            {
                key: 'user',
                name:'用户管理',
                icon: '',
            },
            {
                key: 'userGroup',
                name:'用户组管理',
                icon: '',
            },
        ]
    },
    {
        key: 'assetsView',
        name:'资产视图',
        icon: '',
        children:[
            {
                key: 'assetsMaintain',
                name:'资产维护',
                icon: '',
            },
            {
                key: 'assetsGroupMaintain',
                name:'资产组维护',
                icon: '',
            },
        ]
    },
    {
        key: 'authorityManagement',
        name:'权限管理',
        icon: '',
        children:[
            {
                key: 'authorityBinding',
                name:'权限绑定',
                icon: '',
            },
            {
                key: 'authorityEdit',
                name:'权限编辑',
                icon: '',
            },
            {
                key: 'authorityCopy',
                name:'权限复制',
                icon: '',
            },
            {
                key: 'authorityTransfer',
                name:'权限传递',
                icon: '',
            },
        ]
    },
    {
        key: 'auditAnalysis',
        name:'审计分析',
        icon: '',
        children:[
            {
                key: '1',
                name:'实时会话',
                icon: '',
            },
            {
                key: '2',
                name:'历史会话',
                icon: '',
            },
            {
                key: '3',
                name:'系统日志',
                icon: '',
            },
            {
                key: '4',
                name:'告警日志',
                icon: '',
            },
        ]
    },
    {
        key: 'strategyManagement',
        name:'策略管理',
        icon: '',
        children:[
            {
                key: '5',
                name:'任务调度策略',
                icon: '',
            },
            {
                key: '6',
                name:'访问控制策略',
                icon: '',
            },
            {
                key: '7',
                name:'认证方式策略',
                icon: '',
            },
            {
                key: '8',
                name:'帐号密码策略',
                icon: '',
            },
            {
                key: '9',
                name:'登录失败策略',
                icon: '',
            },
            {
                key: '10',
                name:'登录时间策略',
                icon: '',
            },
            {
                key: '11',
                name:'告警控制策略',
                icon: '',
            }
        ]
    },
    {
        key: 'treasuryManagement',
        name:'金库管理',
        icon: '',
        children:[
            {
                key: '12',
                name:'登录级金库策略',
                icon: '',
            },
            {
                key: '13',
                name:'指令级金库策略',
                icon: '',
            },
            {
                key: '14',
                name:'金库申请',
                icon: '',
            },

            {
                key: '15',
                name:'金库审批',
                icon: '',
            },
            {
                key: '16',
                name:'金库开关',
                icon: '',
            }
        ]
    },
    {
        key: 'systemManagement',
        name:'系统管理',
        icon: '',
        children:[
            {
                key: '17',
                name:'基础配置',
                icon: '',
            },
            {
                key: '18',
                name:'公告管理',
                icon: '',
            },
            {
                key: '19',
                name:'角色管理',
                icon: '',
            },
            {
                key: '20',
                name:'Logo定制',
                icon: '',
            },
            {
                key: '21',
                name:'集群设置',
                icon: '',
            },
            {
                key: '22',
                name:'超时设置',
                icon: '',
            },
            {
                key: '23',
                name:'CA证书',
                icon: '',
            },
            {
                key: '24',
                name:'双因素配置',
                icon: '',
            },
            {
                key: '25',
                name:'水印配置',
                icon: '',
            }
        ]
    },
    {
        key: 'systemMaintenance',
        name:'系统维护',
        icon: '',
        children:[
            {
                key: '注册激活',
                name:'27',
                icon: '',
            },
            {
                key: '28',
                name:'系统备份',
                icon: '',
            },
            {
                key: '29',
                name:'日志备份',
                icon: '',
            },
            {
                key: '30',
                name:'磁盘清理',
                icon: '',
            },
            {
                key: '31',
                name:'常用工具',
                icon: '',
            },
            {
                key: '32',
                name:'个人工作台',
                icon: '',
            },

        ]
    }
]

export default menuList



