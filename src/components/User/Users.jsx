import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Users = () => {

    const userLoaded = useLoaderData()

    const [users, setUsers] = useState(userLoaded)

    const handleDelete =_id=>{
        console.log('ok id is', _id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.deletedCount>0 ){
                alert('deleted successfully')
                const remaining = users.filter(Us=>Us._id !== _id)
                setUsers(remaining)
            }

        })
    }


    return (
        <div>
            <h1>all data {userLoaded.length}</h1>
            <div>
                {
                    users.map(user => 
                    <p key={user._id}>
                    {user.name} : {user.email}
                    <Link to={`/update/${user._id}`}>Update</Link>
                    <button onClick={()=>handleDelete(user._id)}>X</button> 
                    </p>)
                }
            </div>
        </div>
    );
};

export default Users;