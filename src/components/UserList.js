import User from "./User";
export default function UserList({users}){
    
    return(
        <div>
            {users.map(user=>(
                <User key={user.id} user={user}></User>
            ))}
        </div>
    );
}