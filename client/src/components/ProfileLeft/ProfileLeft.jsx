import React from 'react'
import FollowersCard from '../FollowersCard/FollowersCard'
import InfoCard from '../InfoCard/InfoCard'
import Search from '../Search/Search'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div className='ProfileLeft'>
        <Search />
        <InfoCard />
        <FollowersCard />
    </div>
  )
}

export default ProfileLeft