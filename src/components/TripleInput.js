import { useState } from "react";
export default function TripleInput(){
    //현재의 상태(useState)를 객체(inputs,setInput)로 저장함
    const [inputs,setInput] = useState({
        name:"",
        id:"",
        password:""
    })
    //inputs객체를 구조분해할당해서 name, id, password로 나눔.
    const {name,id,password} = inputs;
    // console.log(inputs)
    //input에 함수삽입
    function onChange(e){
        console.log(e)
        const { name, value } = e.target; //e안에 target은 현재 선택된 input이고, 각 input의 name은 name,id,password로 됨.
        //첫번째 인풋에 이벤트가 발생했을때는 name에 name이 할당
        //두번째 인풋에 이벤트가 발생했을때는 name에 id가 할당
        //세번째 인풋에 이벤트가 발생했을때는 name에 password가 할당
        // console.log(e.target)
        setInput({
            ...inputs, //현재 선택한 input을 제외한 나머지 input들을 가져오는 역할
            [name] : value //현재 선택한 키 값('[name]칸'), 값('value칸')을 받아오는 역할
        })
    }
    //초기화 버튼 함수
    // function onReset(){
    //     setInput({
    //         name:"",
    //         id:"",
    //         password:""
    //     })
    // }
    const onReset = () => {
        setInput({
            name:"",
            id:"",
            password:""
        })
    }
    return(
        <div>
            <input name="name" placeholder="이름" value={name} onChange={onChange}/><br/>
            <input name="id" placeholder="아이디" value={id} onChange={onChange}/><br/>
            <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onChange}/><br/>
            <button onClick={onReset}>초기화</button>
            <div>
                <p>이름 : {name}</p>
                <p>아이디 : {id}</p>
                <p>비밀번호 : {password}</p>
            </div>
        </div>
    );
}