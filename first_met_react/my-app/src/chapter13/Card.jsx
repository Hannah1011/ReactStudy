import React from 'react';
import './animation.css';

export default function Card(props) {
    const { title, backgroundColor, children, imageSrc } = props;
    {/* title, backgroundColor가 스페셜라이제이션 , childeren이 컨테인먼트 */}

    return (
        <div className='card_container' style={{backgroundColor: backgroundColor || "white"}}>
            {imageSrc && <img src={imageSrc} alt="Profile" className='image_example'/>}
            <div className='text_container'>
            {title && <h1>{title}</h1>}
            {children} 
            </div>
        </div>
    );
}

