import productImg from '../../assets/img/product-1.webp'
import productImg2 from '../../assets/img/product-2.webp'
import productImg3 from '../../assets/img/product-3.webp'
import productImg4 from '../../assets/img/product-4.webp'
import productImg5 from '../../assets/img/product-5.webp'
import ProductCard from './ProductCard';

const ProductCollection = () => {
    const cardData = [
        {
            img: productImg,
            title: "Modern Smart Phone",
            price: "$300",
            category: "Accessories"
        },
        {
            img: productImg2,
            title: "Modern Smart Phone",
            price: "$300",
            category: "Accessories"
        },
        {
            img: productImg3,
            title: "Modern Smart Phone",
            price: "$300",
            category: "Accessories"
        },
        {
            img: productImg4,
            title: "Modern Smart Phone",
            price: "$300",
            category: "Accessories"
        },
        {
            img: productImg5,
            title: "Modern Smart Phone",
            price: "$300",
            category: "Accessories"
        }

    ];

    return (
        <section>
            <div className="container">
            
                <div className="card-grid">
                    {
                        cardData.map((product, index) => <ProductCard key={index} product={product} /> )
                    }

                </div>
            </div>
           
        </section>
    );
};

export default ProductCollection;