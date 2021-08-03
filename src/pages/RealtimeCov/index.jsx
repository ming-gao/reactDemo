// import React, {Component} from 'react';
// import './realtimeCov.less'
//
// import ConditionalSearch from "../../components/ConditionalSearch";
// import TableTest from "../../components/TableTest";
// import Columns from "../../components/Tableuser";
// import {Link} from "react-router-dom";
// import {EditOutlined, EyeOutlined, KeyOutlined} from "@ant-design/icons";
// import {getGroupTable, searchTable} from "../../api/user";
//
// const columns = [
//     {
//         title: 'userName', dataIndex: 'userName', render: (text, record) => {
//             return <span title={text}>{text}</span>
//         }
//     },
//     {
//         title: 'description', dataIndex: 'description', render: (text, record) => {
//             return <span title={text}>{text}</span>
//         }
//     },
//     {
//         title: 'action',
//         dataIndex: 'action',
//         render: (_, record) =>
//             (
//                 <div>
//                     <Link to='/user'>
//                         <EditOutlined style={{fontSize: 18}}/>
//                     </Link>
//                     <Link to='/adduser'>
//                         <EyeOutlined style={{fontSize: 18}}/>
//                     </Link>
//                     <Link to='/user'>
//                         <KeyOutlined style={{fontSize: 18}}/>
//                     </Link>
//                 </div>
//             ),
//         width: 180
//     },
// ]
// const schema = {
//     "type": "object",
//     "properties": {
//         "keywords": {
//             "title": "输入框",
//             "type": "string",
//             "props": {},
//         },
//         "input_m4jmti": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "date_4hFxMb": {
//             "title": "日期选择",
//             "type": "string",
//             "format": "date"
//         },
//         "input_h-00QT": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "input_n4Larp": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "input_X7K_JO": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "input_lvNzm6": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "input_Cjlaul": {
//             "title": "输入框",
//             "type": "string",
//             "props": {}
//         },
//         "select_U6ArhO": {
//             "title": "单选",
//             "type": "string",
//             "enum": [
//                 "a",
//                 "b",
//                 "c"
//             ],
//             "enumNames": [
//                 "早",
//                 "中",
//                 "晚"
//             ],
//             "widget": "select"
//         },
//         "select_CmjMcl": {
//             "title": "单选",
//             "type": "string",
//             "enum": [
//                 "a",
//                 "b",
//                 "c"
//             ],
//             "enumNames": [
//                 "早",
//                 "中",
//                 "晚"
//             ],
//             "widget": "select"
//         }
//     },
//     "column": 4,
//     "labelWidth": 80,
//     "displayType": "row"
// }
//
// class RealtimeCov extends Component {
//     state = {
//         dataSource: [],
//         loading: true,
//         compValue: {},
//     }
//
//     componentDidMount() {
//         this.getDta()
//     }
//
//     getDta = () => {
//         getGroupTable().then(res => {
//             this.setState({dataSource: res.data.list, loading: false})
//         })
//     }
//     formValue = (value) => {
//         console.log('父组件收到的数据', value)
//         searchTable(value).then(res => {
//             console.log(res)
//             this.setState({dataSource: res.data.userInfo.list})
//         })
//     }
//
//     render() {
//         const {dataSource} = this.state
//         return (
//             <div>
//                 <ConditionalSearch from={this.props.from} schema={schema} getFormvalue={this.formValue}
//                                    getTableData={this.getDta}/>
//                 <TableTest columns={columns} dataSource={dataSource}/>
//                 <table>
//                     <tr>
//                         <Columns/>
//                     </tr>
//                 </table>
//             </div>
//         );
//     }
// }
//
// export default RealtimeCov;
import React, {Component} from 'react';
import TableUser from "../../components/Tableuser";
import Tree from '../../components/EditTree'
import TreeDemo from '../../components/EditTree/edit'

class Real extends Component {
    render() {
        return (
            <div>
                <TreeDemo/>
                <TableUser/>
            </div>
        );
    }
}

export default Real;
