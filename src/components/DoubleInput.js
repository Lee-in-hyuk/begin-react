import { useState, useRef } from "react";
export default function DoubleInput(){
    //useRef()를 사용하여 Ref객체를 생성
    const selectInput = useRef();
    console.log(selectInput)
    //현재의 상태를 객체로 저장함
    const [inputs,setInput] = useState({
        name:"",
        nickname:""
    });
    //inputs객체를 구조분해 할당
    const { name, nickname } = inputs
    function onChange(e){
        const { name, value } = e.target;
        setInput({
            ...inputs,
            [name]:value
        })
    }
    // function onReset(){
    //     setInput({
    //         name:"",
    //         nickname:""
    //     })
    // }
    const onReset = () => {
        setInput({
            name:"",
            nickname:""
        })
        selectInput.current.focus();
        console.log(selectInput);
    }
    return(
        <div>
            <input ref={selectInput} placeholder="이름" name="name" value={name} onChange={onChange}/>
            <input placeholder="닉네임" name="nickname" value={nickname} onChange={onChange}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값</b>
                <p>이름 : {name}</p>
                <p>닉네임 : {nickname}</p>
            </div>
        </div>
    );
}