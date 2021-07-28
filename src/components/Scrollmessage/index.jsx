import React, { Component } from 'react'
import './Srollmessage.css'

export default class Scrollmessage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noticeList: [
                {
                    key: 1,
                    text: ' 磁盘空间剩余充足，可以正常使用'
                },
                {
                    key: 2,
                    text: '  剩余资产数982 ,License截止日期为:2999-12-31 '
                },
            ],
            animate: false,
        }
    }

    //页面加载的时候，设置一个永恒的定时器，1.5s后就会执行定时器中的逻辑
    componentDidMount() {
        setInterval(() => {
            this.setState({
                animate: true
            })
            this.changeAnim()
        }, 2500);
    }

    //在setInterval执行中，会调用该函数，在内部会设置一个一次性的定时器，每次都会将数组的第一个元素添加到数组的最后，并且将数组的第一个元素删除，
    changeAnim = () => {
        const { noticeList } = this.state
        setTimeout(() => {
            noticeList.push(noticeList[0]);
            noticeList.shift();
            this.setState({
                noticeList,
                animate: false
            })
        }, 2000)
    }

    render() {
        const { noticeList, animate } = this.state;
        return (
            <div className="scrollPage">
                <div className="scrollWrapper">
                    {/*列表根据animate 来判断是否添加anim类样式*/}
                    <ul className={animate ? 'anim' : ''}>
                        {
                            noticeList.map((item, index) => {
                                return <li key={index}>{item.text}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}


