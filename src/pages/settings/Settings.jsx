import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'
import PIC from '../../images/cloudy.JPEG'
import { useContext, useState } from 'react'
import axios from 'axios'
import { Context } from '../../context/Context'

export default function Settings() {
    const { user, dispatch } = useContext(Context)
    const [file, setFile] = useState(null)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [success, setSuccess] = useState(false)
    const PF = "https://daily-snapshot-api.herokuapp.com/imgs/"

    const handleSubmit = async(e) => {
        e.preventDefault();
        dispatch({type:"START_UPDATE"})
        const updatedUser = {
            userId: user._id,
            username,
            email,
            password,
        }
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename)
            data.append("file", file)
            updatedUser.profilePic = filename
            try {
                await axios.post("/upload", data)
            } catch (err) {
                
            }
        }
        try {
            const res = await axios.put("/users/"+user._id, updatedUser);
            setSuccess(true)
            dispatch({type:"SUCCESS_UPDATE", payload: res.data})
        } catch (err) {
            dispatch({type:"FAILURE_UPDATE"})
        }
    }
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
            <form className="settingsForm" onSubmit= {handleSubmit}>
                <label >Profile Picture</label>
                <div className="settingsProfPic">
                    <img src={file ? URL.createObjectURL(file) : PF + user.profilePic}  alt="" />
                    <label htmlFor="fileInput">
                    <i className="settingsProfPicIcon fa-solid fa-arrow-up-from-bracket"></i>
                    </label>
                    <input type="file" id="fileInput" style={{display:"none"}} onChange = {(e) => setFile(e.target.files[0])}/>
                </div>
                <label>Username</label>
                <input type="text" placeholder={user.username} onChange={e => setUsername(e.target.value)} />
                <label>Email</label>
                <input type="email" placeholder={user.email} onChange={e => setEmail(e.target.value)}/>
                <label>Password</label>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                <button className="settingsSubmit" type="submit">Update</button>
                {success && (
                    <span style={{ color: "green", textAlign: "center", marginTop: "20px" }}>Profile updated successfully.</span>
                )}
            </form>
        </div> 
    </div>
  )
}
