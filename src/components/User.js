export default function User({user,onRemove,id}){
    return(
        <div>
            <p>이름은 {user.username} 입니다.</p>
            <p>나이는 {user.age}살 입니다.</p>
            <button onClick={()=>{onRemove(id)}}>삭제</button>
        </div>
    );
}