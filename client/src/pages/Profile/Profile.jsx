import React from 'react'
import ProfileCard from '../../components/ProfileCard/ProfileCard'
import ProfileLeft from '../../components/ProfileLeft/ProfileLeft'
import PostSide from '../../components/PostSide/PostSide'
import TrendSide from '../../components/TrendSide/TrendSide'
import './Profile.css'

const Profile = () => {
  return (
    <div className='Profile'>
      <ProfileLeft />
      <div className="profileCentre">
        <ProfileCard location = "profilePage" />
        <PostSide />
      </div>
      <TrendSide />
    </div>
  )
}

export default Profile