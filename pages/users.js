import React from "react";

import User from '../components/user';

function UserList({ users }) {
    return (<React.Fragment>
        <h1>list of users</h1>
        {
            users.map((user) => {
                return (
                    <div key={user.id}>
                        <User user={user}/>
                    </div>);
            })
        }
    </React.Fragment>);
}

export default UserList;

export async function getStaticProps() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json();
    console.log(data);

    return {
        props: {
            users: data,
        }
    }
}