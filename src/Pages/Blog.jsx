import BlogCollection from "../Components/Blog/BlogCollection";
import PageTitle from "../Components/Shared/PageTitle";


const Blog = () => {
    return (
        <>
            <PageTitle title={"Blog"} />
            <BlogCollection />
        </>
    );
};

export default Blog;