import React from "react";
function Hello({name,isSpecial}){
    return(
        <div>
            {/* {isSpecial ? <span>***</span> : null } */}
            {/* 단축평가 논리 계산법 */}
            { isSpecial && <span>***</span>}
            안녕하세요 {name}님
        </div>
    );
}
export default Hello;