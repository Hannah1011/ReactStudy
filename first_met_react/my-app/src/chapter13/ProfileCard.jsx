import React from "react";
import Card from "./Card";

export default function ProfileCard(props){
    const profiles = [
        {id:1, title: "안녕", backgroundColor: "lightpink", content: "오호라 안녕", imageSrc: "https://i.pinimg.com/564x/2a/20/a5/2a20a51b925251276ffa398a693c9ab3.jpg"},
        {id:2, title: "사랑", backgroundColor: "tomato", content: "사랑이란 뭐죵!? 모죠! 모죠의 일기...",imageSrc: "https://i.pinimg.com/736x/ae/cf/da/aecfda83d4972a72d6d0751101f9b2b3.jpg"},
        {id:3, title: "우정", backgroundColor: "peachpuff", content: "친구는 최고입니다", imageSrc: "https://i.pinimg.com/564x/b7/59/ff/b759ffda18a26e6933ca07e4e2dd5100.jpg"},
        {id:4, title: "파이팅!", backgroundColor: "deepskyblue", content: "언제나 기쁜마음으로 화이팅",imageSrc: "https://i.pinimg.com/564x/e3/5f/34/e35f34b2d3518b43d64b81667192401c.jpg"},
        {id:5, title: "커비공부법", backgroundColor: "palegreen", content: "아... 노력없이 리액트 잘할래요", imageSrc: "https://i.pinimg.com/564x/05/fb/22/05fb221f5dcf3871e4320801f63df1b7.jpg"},
        {id:6, title: "궁벵이", backgroundColor: "indianred", content: "그냥 궁벵이처럼 살고싶어!", imageSrc: "https://i.pinimg.com/736x/b3/cb/5b/b3cb5b7c56e0fb31fb185dc9e903ff24.jpg"},
    ];

    return (
        <div>
            {profiles.map((profile)=>(
                <Card 
                key={profile.id} 
                title={profile.title} 
                backgroundColor ={profile.backgroundColor}
                imageSrc ={profile.imageSrc}>
                    <p>{profile.content}</p>
                </Card>
            ))}
        </div>
    );
}