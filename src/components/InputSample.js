import { useState } from "react";
export default function InputSample(){
    const [text,setText] = useState("");
    // function onChange(e){
    //     console.log(e.target.value);
    //     setText(e.target.value);
    // } 아래에 쓴거랑 같음.
    const onChange = (e) => {
        console.log(e.target.value);
        setText(e.target.value);
    }
    // function onReset(){
    //     setText("");
    // } 아래와 같음
    const onReset = ()=> {
        setText("");
    }
    return(
        <div>
            <input value={text} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {text}
            </div>
        </div>
    );
}