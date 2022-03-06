import './singlePost.css'
import PIC from "../../images/neighborhood.JPEG"
export default function SinglePost() {
  return (
    <div className='singlePost'>
        <div className="singlePostWrapper">
            <img src= {PIC} alt="Image" className="singlePostImg" /> 
            <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>  
                    <i className="singlePostIcon fa-solid fa-trash-can"></i>  
                </div>
            </h1>  
            <div className="singlePostInfo">
                <span className='singlePostAuthor'>Author: <b>Sam</b></span> 
                <span className="singlePostDate">1 hr ago</span>    
            </div>
            <p className='singlePostDesc'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum harum illo consectetur nam consequuntur voluptatibus omnis odio hic iure quibusdam, 
                esse enim veritatis similique non placeat, laboriosam corporis, tenetur dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum harum illo consectetur nam consequuntur voluptatibus omnis odio hic iure quibusdam, 
                esse enim veritatis similique non placeat, laboriosam corporis, tenetur dolore.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Rerum harum illo consectetur nam consequuntur voluptatibus omnis odio hic iure quibusdam, 
                esse enim veritatis similique non placeat, laboriosam corporis, tenetur dolore.
            </p>
        </div>   
    </div>
  )
}
