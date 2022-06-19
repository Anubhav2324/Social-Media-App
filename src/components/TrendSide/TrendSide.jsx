import React from 'react'
import './TrendSide.css'
import Home from '../../img/home.png'
import Noti from '../../img/noti.png'
import Comment from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import TrendCard from '../TrendCard/TrendCard'


const TrendSide = () => {
  return (
    <div className='TrendSide'>
        <div className="navIcons">
            <img src={Home} alt="" />
            <UilSetting />
            <img src={Noti} alt="" />
            <img src={Comment} alt="" />
        </div>
        <TrendCard />
        <button className='button ts-button'>
            Share
        </button>
    </div>
  )
}

export default TrendSide