import React from "react";

const styles = {
    wrapper: {
        padding: 16,
        display: "flex",
        flexDirection: "row",
        borderBottom: "1px solid grey"
    },
    greeting: {
        marginRight: 8,
    },
};

function Toolbar(props) {
    {/*구조분해할당에 해당한다. props객체에 3개의 속성을 직접 추출해서 각각의 변수를 만드는 것이다. 
        props.isLoggedIn 대신에 isLoggedIn처럼 직접 변수를 사용할 수 있게된다. */}
    const { isLoggedIn, onClickLogin, onClickLogout} = props;

    return (
        <div style = {styles.wrapper}>
            {/* 로그인 상태일 때 환영 메시지를 보여줍니다. */}
            {isLoggedIn && <span style={styles.greeting}>환영한다네!</span>} 
            
            {/* 로그인 상태에 따라 버튼을 변경합니다. */}
            {isLoggedIn ? (
                <button onClick = {onClickLogout}>로그아웃</button>
            ) : (
                <button onClick = {onClickLogin}>로그인</button>
            )}
        </div>
    );
}

export default Toolbar;