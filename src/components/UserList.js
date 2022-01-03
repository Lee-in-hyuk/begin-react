import User from "./User";
export default function UserList({users, onRemove}){
    
    return(
        <div>
            {users.map(user=>(
                <User key={user.id} user={user} id={user.id} onRemove={onRemove}></User>
            ))}
        </div>
    );
}