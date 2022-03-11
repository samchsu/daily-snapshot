import "./post.css"
import {Link} from "react-router-dom"
export default function Post({ post }) {
    const ProfPic = "http://localhost:5000/imgs/"
    return (
        <div className="post">
            {post.photo && (
                <img className="postImg" src={ProfPic + post.photo} alt="" />
            )}
            <div className="postInfo">
                <div className="postCategory">
                    {post.categories.map(c => (
                        <span className="postCategory">{c.name}</span>
                    ))}
                </div>
                <Link to = {`/post/${post._id}`} className = "link"><span className="postTitle">{post.title}</span></Link>
                <hr />
                <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
            </div>
            <p className="postDesc">
                {post.desc}
            </p>
        </div>
    )
}
