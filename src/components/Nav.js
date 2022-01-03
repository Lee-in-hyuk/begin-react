import React from "react";
function Nav(props){
    //props는 오브젝트 형태
    let lists = [];
    let data = props.data;
    let i = 0;
    while (i<data.length){
        lists.push(<li key={data[i].id}><a href="#">{data[i].title}</a></li>);
        i = i+1;
    }
    return(
      <nav>
        <ul>
          {lists}
        </ul>
      </nav>
    );
  }
  export default Nav;