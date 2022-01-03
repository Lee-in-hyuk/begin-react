import { useState } from "react";
export default function Counter(){
    // const numState = useState(0);
    // const num = numState[0];
    // const setNum = numState[1];
    //위에 세 줄을 구조분해할당을 써서 한 줄로 바꾸면
    const [num,setNum] = useState(0);
    
    function onIncrease(){
        setNum(num+1);
    }
    function onDecrease(){
        setNum(num-1);
    }
    return(
        <div>
            <h1>{num}</h1>
            <button onClick={onIncrease}>+1</button>
            <button onClick={onDecrease}>-1</button>
        </div>
    );
}