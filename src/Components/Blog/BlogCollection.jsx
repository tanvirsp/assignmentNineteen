import BlogCard from "./BlogCard";
import postPic  from '../../assets/img/post-1.webp'
const BlogCollection = () => {
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
        },
        {
            id: 4,
            title: "The Pros and Cons of Smart Product",
            text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incid ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
            publishDate: "27,Jun 2023 ",
            author: " Wild Nick",
            img: postPic,
        }
    ]
    return (
        <section>
            <div className="container">
                <h3 className="text-center p-5">Our Latest Blog</h3>
                <div className="blog-grild">
                    {
                        blogData.map( (blog, index) => <BlogCard key={index} blog={blog} /> )
                    }
                </div>
            </div>
            
        </section>
    );
};

export default BlogCollection;