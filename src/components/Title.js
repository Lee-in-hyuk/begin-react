import React from "react";
function Title(props){
    // 오브젝트형태로 props에 담겨서 객체로 사용됨
    return(
      <header>
        <h1>{props.title}</h1>
        {props.sub}
      </header>
    );
  }
// default props 설정
Title.defaultProps = {
    title:'곧 점심',
    sub: '랄랄라라라라'
}
  export default Title;