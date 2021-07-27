import React from 'react';
import cs from 'classnames';

import "./test.css"
export default class TextContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: props.content,
            showAll: false,
            btnText: '全文',
            needHidden: false //  文字超出4行 需要隐藏
        };
    }

    /**
     * @description: 处理content文案的点击展开收起
     * @return: null
     */
    handleContent = e => {
        e.stopPropagation();
        let { showAll } = this.state;
        this.setState({
            showAll: !showAll
        });
    };

    // 判断文本超出行数
    isElementCollision = (ele, rowCount = 4, cssStyles, removeChild) => {
        if (!ele) {
            return false;
        }

        const clonedNode = ele.cloneNode(true);
        // 给clone的dom增加样式
        clonedNode.style.overflow = 'visible';
        clonedNode.style.display = 'inline-block';
        clonedNode.style.width = 'auto';
        clonedNode.style.whiteSpace = 'nowrap';
        clonedNode.style.visibility = 'hidden';
        // 将传入的css字体样式赋值
        if (cssStyles) {
            Object.keys(cssStyles).forEach(item => {
                clonedNode.style[item] = cssStyles[item];
            });
        }

        // 给clone的dom增加id属性
        let _time = new Date().getTime();

        const containerID = 'collision_node_id_' + _time;
        clonedNode.setAttribute('id', containerID);

        let tmpNode = document.getElementById(containerID);
        let newNode = clonedNode;
        if (tmpNode) {
            document.body.replaceChild(clonedNode, tmpNode);
        } else {
            newNode = document.body.appendChild(clonedNode);
        }
        // 新增的dom宽度与原dom的宽度*限制行数做对比
        const differ = newNode.offsetWidth - ele.offsetWidth * rowCount + 40;
        // console.log(differ, 'differ');
        if (removeChild) {
            document.body.removeChild(newNode);
        }
        return differ > 0;
    };

    componentDidMount = () => {
        const cssStyles = { fontSize: '0.9375rem', fontWeight: '400', lineHeight: '1.5625rem' };
        // console.log(this.isElementCollision(this.refs['content'], 4, cssStyles, true));
        let needHidden = this.isElementCollision(this.refs['content'], 4, cssStyles, true);
        this.setState({
            needHidden
        });
    };

    render() {
        let { content, needHidden, showAll } = this.state;
        let { headerText } = this.props;
        return (
            <div>
                <div
                    ref={'content'}
                    className={cs('content', { 'hidden-text': !showAll && needHidden })}>
                    {headerText ? headerText() : null}
                    {content}
                </div>
                {needHidden && (
                    <div
                        className="content-btn"
                        onClick={e => {
                            this.handleContent(e);
                        }}>
                        {!showAll ? '全文' : '收起'}
                    </div>
                )}
            </div>
        );
    }
}
