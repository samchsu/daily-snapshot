import { Link } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    const PF = "https://daily-snapshot-backend.herokuapp.com/imgs/"
    return (
        <div className="navBar">
            <div className="navBarLeft">
                <i className="navBarIcon fa-brands fa-github"></i>
                <i className="navBarIcon fa-brands fa-linkedin"></i>
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
                    <li className="navBarListItem" onClick={ handleLogout }>{user && "LOGOUT"}</li>
                </ul>
            </div>
            <div className="navBarRight">
                {user ? (<Link to="/settings"><img className="navBarImg" src = { PF + user.profilePic } alt="" /></Link>)
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
