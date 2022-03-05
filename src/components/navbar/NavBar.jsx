import "./navbar.css"
import PROFPIC from "../../images/Octocat.png"
export default function navbar() {
  return (
    <div className="navBar">
        <div className="navBarLeft">
            <i className = "navBarIcon fa-brands fa-facebook"></i>
            <i className = "navBarIcon fa-brands fa-linkedin"></i>
            <i className = "navBarIcon fa-brands fa-twitter"></i>
            <i className = "navBarIcon fa-brands fa-instagram"></i>
        </div>
        <div className="navBarCenter">
            <ul className="navBarList">
                <li className="navBarListItem">HOME</li>
                <li className="navBarListItem">ABOUT</li>   
                <li className="navBarListItem">CONTACT</li>   
                <li className="navBarListItem">WRITE</li>   
                <li className="navBarListItem">LOGOUT</li>      
            </ul>
        </div>
        <div className="navBarRight">
            <img className="navBarImg" src= {PROFPIC} alt="" />
            <i className="navBarSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>


    </div>
  )
}
