import React, {useState, useEffect } from "react";
import useCounter from "./useCounter";

const MAX_CAPACITY = 10; 


function Accomodate(props){
    const [isFull, setIsFull] = useState(false);
    const [count, increaseCount, decreaseCount] = useCounter(0);

    //의존성 배열이 없는 useEffect 훅은 컴포넌트가 mount된 직후에 호출되고 이후 컴포넌트가 업데이트 될 때마다 호출된다.
    useEffect(()=> {
    console.log("================");
    console.log("useEffect()is called");
    console.log(`isFull: ${isFull}`);
    });

    // 컴포넌트가 마운트된 직후에 호출되고 카운트 값이 바뀔 때마다 호출된다. 
    useEffect(()=> {
        setIsFull(count >= MAX_CAPACITY);
        console.log(`Current count Value: ${count}`);
    },  [count]);

    return (
        <div style = {{ padding: 16 }}>
            <p> {`총 ${count}명 수용했습니다`}</p>

            <button onClick={increaseCount} disabled = {isFull}>
            입장
            </button>
            <button onClick={decreaseCount}> 퇴장 </button>

            {isFull && <p style={{color: "red"}}>정원이 가득찼습니다! </p>}
        </div>
    );
}

export default Accomodate;