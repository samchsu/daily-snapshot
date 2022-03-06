import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import PIC from '../../images/cloudy.JPEG'

export default function Settings() {
  return (
    <div className="settings">
        <div className='settingsWrapper'>
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">
                    Update Account    
                </span>    
                <span className="settingsDeleteTitle">
                    Delete Account    
                </span>    
            </div>
            <form className="settingsForm">
                <label >Profile Picture</label>
                <div className="settingsProfPic">
                    <img src={PIC} alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfPicIcon fa-solid fa-arrow-up-from-bracket"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder='pikapika' />
                <label>Email</label>
                <input type="email" placeholder='ashketchum@gmail.com'/>
                <label>Password</label>
                <input type="password"/>
                <button className="settingsSubmit">Update</button>
            </form>
        </div> 
        <Sidebar/>
    </div>
  )
}
