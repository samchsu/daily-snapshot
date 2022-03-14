import { Link } from "react-router-dom";
import "./navbar.css"
import { useContext } from "react";
import { Context } from "../../context/Context";

export default function Navbar() {
    const { user, dispatch } = useContext(Context);
    const handleLogout = () => {
        dispatch({ type: "LOGOUT" })
    }
    const PF = "https://daily-snapshot-api.herokuapp.com/imgs/"
    return (
        <div className="navBar">
            <div className="navBarLeft">
                <a className="navBarIcon fa-brands fa-github" href="https://www.github.com/samchsu"></a>
                <a className="navBarIcon fa-brands fa-linkedin" href="https://www.linkedin.com/in/samuel-hsu/"></a>
                <a className="navBarIcon fa-brands fa-instagram" href="https://www.instagram.com/samuel.hsu"></a>
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
