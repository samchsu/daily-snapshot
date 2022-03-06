import { Link } from "react-router-dom";
import "./navbar.css"
import PROFPIC from "../../images/Octocat.png"
export default function navbar() {
    const user = false;
    return (
        <div className="navBar">
            <div className="navBarLeft">
                <i className="navBarIcon fa-brands fa-facebook"></i>
                <i className="navBarIcon fa-brands fa-linkedin"></i>
                <i className="navBarIcon fa-brands fa-twitter"></i>
                <i className="navBarIcon fa-brands fa-instagram"></i>
            </div>
            <div className="navBarCenter">
                <ul className="navBarList">
                    <li className="navBarListItem">
                        <Link className="link" to="/">HOME</Link>
                    </li>
                    <li className="navBarListItem"><Link className="link" to="/about">ABOUT</Link></li>
                    <li className="navBarListItem"><Link className="link" to="/contact">CONTACT</Link></li>
                    <li className="navBarListItem"><Link className="link" to="/write">WRITE</Link></li>
                    <li className="navBarListItem">{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="navBarRight">
                {user ? (<img className="navBarImg" src={PROFPIC} alt="" />)
                    : (
                        <ul className="navBarList">
                            <li className="navBarListItem">
                                <Link className="link" to="/login">LOGIN</Link>
                            </li>
                            <li className="navBarListItem">
                                <Link className="link" to="/register">REGISTER</Link>
                            </li>
                        </ul>)}
                <i className="navBarSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>


        </div>
    )
}
