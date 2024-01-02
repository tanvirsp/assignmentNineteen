
import postPic  from '../../assets/img/post-1.webp'
import BlogCard from '../Blog/BlogCard';

const BlogSection = () => {

    const blogData = [
        {
            id: 1,
            title: "The Pros and Cons of Smart Product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            publishDate: "27,Jun 2023 ",
            author: " Wild Nick",
            img: postPic,
        },
        {
            id: 2,
            title: "The Pros and Cons of Smart Product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            publishDate: "27,Jun 2023 ",
            author: " Wild Nick",
            img: postPic,
        },
        {
            id: 3,
            title: "The Pros and Cons of Smart Product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            publishDate: "27,Jun 2023 ",
            author: " Wild Nick",
            img: postPic,
        }
    ]
    return (
        <section style={{ backgroundColor: "#f7f7f7"}}>
            <div className="container">
                <div className='text-center mb-5'>
                    <h3>Latest Blog</h3>
                    <p>Here are many variations of passages of Lorem Ipsum available</p>
                </div>

            <div className="blog-grild">
                {
                    blogData.map( (blog, index) => <BlogCard key={index} blog={blog} /> )
                }
            </div>
        
        </div>
            
      
            
        </section>
    );
};

export default BlogSection;