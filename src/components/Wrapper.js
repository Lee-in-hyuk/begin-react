import React from "react";
//props.children
function Wrapper({children}){
    return(
        <div>
            {children}
        </div>
    );
}
export default Wrapper;