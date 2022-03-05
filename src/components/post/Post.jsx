import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="https://live.staticflickr.com/65535/51915619452_18d7cb0a1d.jpg" alt="" />
            <div className="postInfo">
                <div className="postPokemon">
                    <span className="postPokemon">Music</span>
                    <span className="postPokemon">Life</span>
                </div>
                <span className="postTitle">Lorem ipsum dolor</span>
                <hr/>
                <span className="postDate">1 hr ago</span>
            </div>
            <p className="postDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, nemo consequuntur eos suscipit facere incidunt. Quae consequatur odio aut illum voluptatibus, culpa pariatur mollitia? Voluptatibus perferendis natus ab ipsa explicabo?</p>
        </div>
    )
}
