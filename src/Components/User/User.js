import React, { useState } from 'react';
import fakeData from '../../fakeData/data';
import './User.css'
import Profile from '../Profile/Profile';
const User = () => {
    const first15 = fakeData.slice(0,15);
    const [users,setUser] = useState(first15);    
    return (
        <div className="main-container">
        
    <div className="user-container">
   
        {
            users.map(user => <Profile user={user}></Profile>)
        }
    
    
    </div>
    <div className="count-container">
        <h3>Count</h3>
    </div>
    
        </div>
    );
};

export default User;