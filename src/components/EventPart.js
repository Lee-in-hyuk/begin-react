export default function EventPart(){
    function showName(){
        console.log('green');
    }
    function showAge(age){
        console.log(age);
    }
    function showText(e){
        console.log(e.target.value);
    }
    return(
        <div>
            <h1>Green</h1>
            {/* showName옆에 ()를 넣으면 버튼누르기전부터 바로 실행이되고
            버튼클릭이벤트가 실행이 안 됨 - 결론은 () 쓰면 안 됨. */}
            <button onClick={showName}>이름보기</button>
            {/* 직접 함수 전달 - 매개변수 전달이 용이 */}
            <button onClick={()=>{
                showAge(20);
            }}>나이보기</button>
            <input type="text" onChange={showText}/>
        </div>
    );
}