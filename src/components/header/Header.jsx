import "./header.css"
import PIC from "../../images/torreypines.jpg"
export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className="headerTitleSm">Today's Featured Post...</span>
            <span className="headerTitleLg">Blog #1</span>
        </div>
        <img className="headerImg" src= {PIC} alt="" />
    </div>   
        
  )
}
