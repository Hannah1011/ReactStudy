import React from "react";
import Notification from "./Notification";

const reservedNotifications = [
    {
        id:1,
        message: "안녕하쇼 오늘 일정은 없습니다."
    },
    {
        id:2,
        message: "점심식사하세요."
    },
    {
        id:3,
        message: "저녁 약속이 있네요"
    },
    {
        id:4,
        message: "오늘까지 리액트 강의 다 들으세요."
    },
    {
        id:5,
        message: "할 수 있습니다."
    },
];

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);

        this.state= {
            notifications: [],
        };
    }

    componentDidMount() {
        const {notifications}= this.state;
        timer = setInterval(() =>{
            if (notifications.length < reservedNotifications.length) {
                const index = notifications.length;
                notifications.push(reservedNotifications[index]);
                this.setState({ //set을 업데이트 하려면 setState를 사용.
                    notifications: notifications,
                });
            } else {
                this.setState({
                    notifications:[]
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notification)=>{
                    return <Notification 
                    key={notification.id} 
                    id = {notification.id}
                    message = {notification.message} />
                })}
            </div>
        );
    }
}

export default NotificationList;