import React, { useState, useRef} from 'react';
// import Title from './components/Title';
// import Nav from './components/Nav';
// import Content from './components/Content';
// import Wrapper from './components/Wrapper';
import Hello from './components/Hello';
import World from './components/World';
import EventPart from './components/EventPart';
import StatePart from './components/StatePart';
import Counter from './components/Counter';
import InputSample from './components/InputSample';
import DoubleInput from './components/DoubleInput';
import TripleInput from './components/TripleInput';
import UserList from './components/UserList';
import CreateUser from './components/CreateUser';
import './App.css';

function App() {
  //inputs값을 state로 관리
  const [inputs, setInputs] = useState({
    username:'',
    age:'',
  })
  //username에 inputs.username값을 할당
  //age에 inputs.age값을 할당
  const { username, age } = inputs;
  //input에 값을 입력했을 때 실행되는 함수
  function onChange(e){
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]:value
    })
  }
  //userList 삭제 함수
  function onRemove(id){
    setUsers(users.filter(user => user.id !== id));
    console.log(id);
  }
  //등록버튼 클릭 시 실행되는 함수
  //user 객체를 생성한 뒤 users를 update
  function onCreate(){
    const user = {
      id:nextId.current,
      username, //username:username, 이렇게 쓰는걸 한번만 써서 짧게 작성. 
      age,
    }
    //users 배열에 user를 추가하여 update
    setUsers([...users, user]);
    //setUsers(users.concat(user)); 위에 쓴거랑 같은거. - concat은 원래있던 users에 user를 합쳐주는 역할
    nextId.current +=1;
  }
  //users배열을 state로 관리
  const [users, setUsers] = useState([
    { id:1, username:"이승연",age:38 },
    { id:2, username:"송중기",age:28 },
    { id:3, username:"김하늘",age:32 },
    { id:4, username:"정우성",age:34 },
  ]);
  const nextId = useRef(5);
  // console.log(nextId);
  // let contents = [ //자바스크립트 구문
  //   {id:1, title:'react'},
  //   {id:2, title:'vue'},
  //   {id:3, title:'angular'}
  // ];
  return (
    <div className="App">
      <CreateUser onChange={onChange} username={username} age={age} onCreate={onCreate}></CreateUser>
      {/* UserList에 onRemove추가하기 */}
      <UserList users={users} onRemove={onRemove}></UserList>
      {/* <DoubleInput></DoubleInput> */}
      {/* <TripleInput></TripleInput>
      
      <InputSample></InputSample>
      <Counter></Counter>
      <Counter></Counter>
      <Counter></Counter> */}
      {/* <StatePart></StatePart> */}
      {/* <EventPart></EventPart> */}
      {/* <Wrapper>
        <h2>children??</h2>
        <p>이렇게도 전달할 수 있어요</p>
      </Wrapper> */}
      {/* <Hello name="그린" isSpecial={true}></Hello>
      <World></World>
      <div className='box'>Appbox</div> */}
      {/* <Hello name="블루" isSpecial={false}></Hello>
      <Title title="SPA" sub="Single Page Application"></Title>
      <Title title="WEB" sub="world wide web"></Title>
      <Title></Title>
      {/* 자바스크립트 구문 사용하려면 중괄호로 감싸야됨 */}
      {/* <Nav data={contents}></Nav> */}
      {/* <Content title="Hello React" desc="React는 웹 프레임워크로, 자바스크립트 라이브러리의 하나로서 사용자 인터페이스를 만들기 위해 사용된다."></Content> */} 
    </div>
  );
}

export default App;
