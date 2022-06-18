import React from 'react';
import ProfileSide from '../components/ProfileSide/ProfileSide';
import "./Home.css";

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <div className="postSide">PostSide</div>
        <div className="trendSide">TrendSide</div>
    </div>
  )
}

export default Home