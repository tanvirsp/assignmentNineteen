
import { useState } from "react";
import image from "../../assets/img/product-1.webp";
import { GoPlus, GoDash  } from "react-icons/go";
import { MdEdit, MdOutlineDeleteForever } from "react-icons/md";



const CartTable = () => {

    const [cartValue, setCartValue] = useState(1);

    const increase = ()=>{
        setCartValue(cartValue + 1)
    }

    const decrease = ()=>{
        if(cartValue > 0){
            setCartValue(cartValue - 1)
        }
    }

    return (
        <section>
            <div className="container">
                <h4>Your cart items</h4>
                

                <table>
                    <thead>
                        <tr>
                            <th>IMAGE</th>
                            <th>PRODUCT NAME</th>
                            <th>UNTIL PRICE	</th>
                            <th>QTY</th>
                            <th>SUBTOTAL</th>
                            <th>ACTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><img src={image} alt="" /></td>
                            <td>Modern Smart Phone</td>
                            <td>$300.00</td>
                            <td> 
                                <span onClick={decrease} className="item-btn" > <GoDash /> </span> 
                                <input className="display" type="number" name="" id="" value={cartValue}/>  
                                <span onClick={increase} className="item-btn"> <GoPlus /> </span>
                            </td>
                            <td>$300.00</td>
                            <td className="cart-edit-icons"> <MdEdit />  <MdOutlineDeleteForever />  </td>
                        </tr>
                       
                        
                       
                    </tbody>
                </table>
                <div className="text-end">
                    <button className="btn btn-warning py-3 px-4 rounded-0 mt-3 ">PROCESS TO CHECKOUT</button>
                </div>

            </div>
            
        </section>
    );
};

export default CartTable;