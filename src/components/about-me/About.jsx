import "./about.css"
import PIC from "../../images/me.jpg"

export default function About() {
  
  return (
    <div className="about">
      <div className="aboutItem">
        <img className="aboutImg" src={PIC} alt="" />
        <p>Developer.</p>
      </div>
      <div className="aboutItem">
        <div className="aboutSocial">
          <a className="navBarIcon fa-brands fa-github" href="https://www.github.com/samchsu"> </a>
          <a className="navBarIcon fa-brands fa-linkedin" href="https://www.linkedin.com/in/samuel-hsu/"> </a>
          <a className="navBarIcon fa-brands fa-instagram" href="https://www.instagram.com/samuel.hsu"> </a>
      </div>
      </div>
    </div>
  )
}