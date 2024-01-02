import BlogSection from "../Components/Home/BlogSection";
import HeroSection from "../Components/Home/HeroSection";
import ShippingBanner from "../Components/Home/ShippingBanner";
import ProductBanner from "../Components/Product/ProductBanner";
import ProductCollection from "../Components/Product/ProductCollection";
import ReviewContainer from "../Components/Review/ReviewContainer";


const Home = () => {
    return (
        <>
            <HeroSection />
            <ShippingBanner />
            <ProductCollection />
            <ProductBanner />
            <ReviewContainer />
            <BlogSection />
            
        </>
    );
};

export default Home;