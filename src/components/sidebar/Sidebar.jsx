import "./sidebar.css"
import PIC from "../../images/me.jpg"
export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
             <span className="sidebarTitle">ABOUT ME</span>
             <img className="sidebarImg" src= {PIC} alt="" />   
             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto similique modi, quibusdam eligendi enim repellat ullam quisquam officia soluta accusamus 
                 porro mollitia iste deserunt culpa at harum, fugit nam reprehenderit?</p>
        </div> 
        <div className="sidebarItem">
          <span className="sidebarTitle">CATEGORIES</span>
          <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
          </ul>
        </div>
        <div className="sidebarItem">
          <span className="sidebarTitle">SOCIALS</span>
          <div className="sidebarSocial">
            <i className = "sidebarIcon fa-brands fa-facebook"></i>
            <i className = "sidebarIcon fa-brands fa-linkedin"></i>
            <i className = "sidebarIcon fa-brands fa-twitter"></i>
            <i className = "sidebarIcon fa-brands fa-instagram"></i>
          </div>
        </div>
    </div>
  )
}

// 27:42 