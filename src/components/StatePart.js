import { useState } from "react";
export default function StatePart(){
    // useState는 함수
    // 구조분해할당
    const [name,setName] = useState("green");
    function changeName(){
        setName(name==="green"?"blue":"green");
    }
    return(
        <div>
            <h1>state</h1>
            <h2>{name}</h2>
            <button onClick={changeName}>이름 변경하기</button>
        </div>
    );
};