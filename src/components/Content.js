import React from "react";
function Content({title, desc}){
    return(
      <div>
        <h2>{title}</h2>
        {desc}
      </div>
    );
  }
  export default Content;