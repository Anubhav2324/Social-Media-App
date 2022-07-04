import { Modal, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { uploadImage } from '../../actions/UploadAction';
import { updateUser } from '../../actions/UserAction';

const ProfileModal = ({ modalOpened, setModalOpened, data }) => {
    const theme = useMantineTheme();
    const { password, ...otherData } = data;
    const [formData, setFormData] = useState(otherData);
    const [profileImage, setProfileImage] = useState(null);
    const [coverImage, setCoverImage] = useState(null);

    const dispatch = useDispatch();
    const param = useParams();
    const { user } = useSelector((state) => state.authReducer.authData);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            let img = e.target.files[0];
            e.target.name === profileImage ? setProfileImage(img) : setCoverImage(img);
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let userData = formData;
        if(profileImage) {
            const data = new FormData()
            const fileName = Date.now() + profileImage.name
            data.append("name", fileName)
            data.append("file", profileImage)
            userData.profileImage = fileName;
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        if(coverImage) {
            const data = new FormData()
            const fileName = Date.now() + coverImage.name
            data.append("name", fileName)
            data.append("file", coverImage)
            userData.coverImage = fileName;
            try {
                dispatch(uploadImage(data))
            } catch (error) {
                console.log(error);
            }
        }
        dispatch(updateUser(param.id, userData));
        setModalOpened(false);
    };

    return (
        <Modal
            overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
            overlayOpacity={0.55}
            overlayBlur={3}
            size='55%'
            opened={modalOpened}
            onClose={() => { setModalOpened(false) }}
        >
            <form action="" className='infoForm'>
                <h3>Your Info</h3>
                <div>
                    <input type="text" className='infoInput' name='firstname' placeholder='First Name' onChange={handleChange} value={formData.firstname} />
                    <input type="text" className='infoInput' name='lastname' placeholder='Last Name' onChange={handleChange} value={formData.lastname} />
                </div>
                <div>
                    <input type="text" className='infoInput' name='worksAt' placeholder='Works at' onChange={handleChange} value={formData.worksAt} />
                </div>
                <div>
                    <input type="text" className='infoInput' name='livesIn' placeholder='Lives in' onChange={handleChange} value={formData.livesIn} />
                </div>
                <div>
                    <input type="text" className='infoInput' name='relationship' placeholder='Relationship Status' onChange={handleChange} value={formData.relationship} />
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileImage' onChange={handleImageChange} />
                    Cover Image
                    <input type="file" name='coverImage' onChange={handleImageChange} />
                </div>
                <button className='button su-button' onClick={handleSubmit}>Update</button>
            </form>
        </Modal>
    );
}

export default ProfileModal

