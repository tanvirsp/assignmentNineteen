/* eslint-disable react/prop-types */
import { FaRegCalendarAlt, FaUser } from "react-icons/fa";



const BlogCard = (props) => {
    const {title, text, publishDate, author, img} = props.blog;
    return (
        <div className="blog-card text-right">
            <img className="w-100 mb-2" src={img} alt="Image" />
            <div className="d-flex align-items-center ">
                <p> <FaRegCalendarAlt /> <b>{publishDate}</b></p>
                <p className="ms-3"> <FaUser /> <b>{author}</b></p>
            </div>
            <h5 className="my-2">{title}</h5>
            <p>{text}</p>
            <button className="btn btn-warning mt-2 px-4 py-2">Read More</button>
            
        </div>
    );
};

export default BlogCard;