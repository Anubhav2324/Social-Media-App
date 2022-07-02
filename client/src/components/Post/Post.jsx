import React from 'react'
import './Post.css'
import Comment from '../../img/comment.png'
import Share from '../../img/share.png'
import Like from '../../img/like.png'
import Notlike from '../../img/notlike.png'
import { useSelector } from 'react-redux'

const Post = ({data}) => {
  const {user} = useSelector((state)=>state.authReducer.authData)
  return (
    <div className='Post'>
        <img src={data.img ? process.env.REACT_APP_PUBLIC + data.image: ""} alt="" />


        <div className="postReact">
            <img src={data.liked?Like:Notlike} alt="" />
            <img src={Comment} alt="" />
            <img src={Share} alt="" />
        </div>

        <span style={{color: "var(--gray)", fontSize:"12px"}}>{data.likes} likes</span>

        <div className="detail">
            <span><b>{data.name}</b></span>
            <span> {data.desc}</span>
        </div>
    </div>
  )
}

export default Post