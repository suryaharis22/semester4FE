import React from 'react';

const Profile = (props) => {

    const { name, age } = props;
    return (
        <div>
            <p>My name is {name} and I am {age}</p>
        </div>
    );
}

export default Profile;
