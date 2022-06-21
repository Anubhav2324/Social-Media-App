import { Modal, useMantineTheme } from '@mantine/core';

const ProfileModal = ({ modalOpened, setModalOpened }) => {
    const theme = useMantineTheme();

    return (
      <Modal
        overlayColor={theme.colorScheme === 'dark' ? theme.colors.dark[9] : theme.colors.gray[2]}
        overlayOpacity={0.55}
        overlayBlur={3}
        size='55%'
        opened = {modalOpened}
        onClose = {()=>{setModalOpened(false)}}
      >
          <form action="" className='infoForm'>
                <h3>Your Info</h3>
                <div>
                    <input type="text" className='infoInput' name='firstName' placeholder='First Name'/>
                    <input type="text" className='infoInput' name='lastName' placeholder='Last Name'/>
                </div>
                <div>
                    <input type="text" className='infoInput' name='worksAt' placeholder='Works at'/>
                </div>
                <div>
                    <input type="text" className='infoInput' name='livesIn' placeholder='Lives in'/>
                </div>
                <div>
                    <input type="text" className='infoInput' name='relationship' placeholder='Relationship Status'/>
                </div>
                <div>
                    Profile Image
                    <input type="file" name='profileImg'/>
                    Cover Image
                    <input type="file" name='coverImg'/>
                </div>
                <button className='button su-button'>Update</button>
          </form>
      </Modal>
    );
}

export default ProfileModal

