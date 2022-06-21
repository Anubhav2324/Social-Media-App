import React from 'react';
import PostSide from '../../components/PostSide/PostSide';
import ProfileSide from '../../components/ProfileSide/ProfileSide';
import TrendSide from '../../components/TrendSide/TrendSide';
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <ProfileSide />
        <PostSide />
        <TrendSide />
    </div>
  )
}

export default Home