import React from 'react';
import './Profile.css'

const Profile = (props) => {
    console.log(props);
    const { name, img , email , phone} = props.user;
    return (
        <div className="profile">
            
            <div className="user-img">
                <img src={img} alt="" />
            </div>
            <div className="user-details">
                <h3>Name : {name}</h3>
    <p>Email : {email}</p>
    <p>Phone : {phone}</p>
    <button className="main-button">Add Me</button>
            </div>

        </div>
    );
};

export default Profile;