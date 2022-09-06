import React from 'react';
import './Followers.css'

const Followers = (props) => {
    const {first_name, img, followers} = props.follow;
    return (
        <div className="set-data">
            <div className="img-info">
                <img src={img} alt=""/>
            </div>
            <div className="text-info">
                <h3><strong>{first_name}</strong></h3>           
                <p>Follower: {followers} . 0 following</p>
            </div>
        </div>
    );
};

export default Followers;