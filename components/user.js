import React from "react";

function User({user}) {
    return(
        <React.Fragment>
            <p>{user.name}</p>
            <p>{user.email}</p>
            <hr/>
        </React.Fragment>
    );
}
export default User;