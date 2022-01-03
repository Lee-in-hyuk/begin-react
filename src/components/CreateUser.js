export default function CreateUser({username,age,onChange,onCreate}){
    return(
        <div>
            <input name="username" placeholder="이름" value={username} onChange={onChange}/>
            <input name="age" placeholder="나이" value={age} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>

    );
}