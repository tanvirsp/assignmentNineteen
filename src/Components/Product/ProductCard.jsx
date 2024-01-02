/* eslint-disable react/prop-types */

import { CiShoppingCart, CiHeart  } from "react-icons/ci";
import { PiEye } from "react-icons/pi";
import { IoIosGitCompare } from "react-icons/io";


const ProductCard = ({product}) => {
    const {img, title, price, category} = product;


        return (
        <div className="product-card">
            <span className="batch">New</span>
            <img src={img} alt="Product" />
            <div className="card-text">
                <p className="porduct-category">{category}</p>
                <h5 className="product-title">{title}</h5>
                <h6><del>450</del> <span className="price">{price}</span></h6>
            </div>
            <div className="action-icon">
                <span><CiShoppingCart /> </span>
                <span><CiHeart /> </span>
                <span><PiEye /> </span>
                <span><IoIosGitCompare /> </span>

            </div>
        </div>
    );
};

export default ProductCard;