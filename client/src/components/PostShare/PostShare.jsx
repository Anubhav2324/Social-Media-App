import React, { useState, useRef } from 'react'
import './PostShare.css'
import ProfileImg from '../../img/profileImg.jpg'
import { UilScenery, UilPlayCircle, UilLocationPoint, UilSchedule, UilTimes } from '@iconscout/react-unicons';
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage, uploadPost } from '../../actions/UploadAction';

const PostShare = () => {
    const loading = useSelector((state)=>state.postReducer.uploading)
    const [ image, setImage ] = useState(null)
    const dispatch = useDispatch();
    const imgRef = useRef()
    const desc = useRef()
    const {user} = useSelector((state)=>state.authReducer.authData)
    const onImgChange = (event) => {
        if(event.target.files && event.target.files[0]) {
            let img = event.target.files[0];
            setImage(img);
        }
    }

    const reset = () => {
        setImage(null);
        desc.current.value = ""
    }

    const handleShare = (e) => {
        e.preventDefault();
        const newPost = {
            userId: user._id,
            desc: desc.current.value
        }
        if(image) {
            const data = new FormData()
            const filename = Date.now() + image.name
            data.append("name", filename)
            data.append("file", image)
            newPost.image = filename;
            console.log(newPost);
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(uploadPost(newPost));
        reset();
    }

  return (
    <div className='PostShare'>
        <img src={ProfileImg} alt="" />
        <div>
            <input type="text" placeholder="What's on your mind?" ref={desc} required/>
            <div className="postOptions">
                <div className="option" style={{color: "var(--photo)"}} onClick={()=>{imgRef.current.click()}}>
                    <UilScenery />
                    Photo
                </div>
                <div className="option" style={{color: "var(--video)"}} >
                    <UilPlayCircle />
                    Video
                </div>
                <div className="option" style={{color: "var(--location)"}} >
                    <UilLocationPoint />
                    Location
                </div>
                <div className="option" style={{color: "var(--schedule)"}} >
                    <UilSchedule />
                    Schedule
                </div>
                <button className='button ps-button' onClick={handleShare} disabled={loading}>{loading? "Uploading...": "Share"}</button>
                <div style={{display: "none"}}>
                    <input type="file" name='myImg' ref={imgRef} onChange={onImgChange} />
                </div>
            </div>
            {image && (
                <div className="previewImg">
                    <UilTimes onClick={()=>setImage(null)} />
                    <img src={URL.createObjectURL(image)} alt="" />
                </div>
            )}
        </div>
    </div>
  )
}

export default PostShare