import "./header.css"
import PIC from "../../images/torreypines.jpg"
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Welcome to...</span>
            <span className="headerTitleLg">Daily Snapshot</span>
        </div>
        <img className="headerImg" src= {PIC} alt="" />
    </div>   
        
  )
}
