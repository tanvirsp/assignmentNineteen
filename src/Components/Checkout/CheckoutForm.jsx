import { useState } from "react";
import { Accordion } from "react-bootstrap";


const CheckoutForm = () => {

    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = (event) => {
        // Update the state with the new checkbox value
        setIsChecked(event.target.checked);
      };
      console.log(isChecked);

    return (
        <section>
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
            
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">First Name</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0"/>
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">Last Name</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label mt-4">Company Name</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label mt-4">Country</label>
                                     <select className="form-select p-2" aria-label="Default select example">
                                        <option selected>Select A Country</option>
                                        <option value="Bangladesh">Bangladesh</option>
                                        <option value="India">India</option>
                                        <option value="Pakistan">Pakistan</option>
                                        <option value="Nepal">Nepal</option>
                                    </select>
                                </div>
                            </div>
                            
                            <div className="row">
                                <div className="col-12">
                                    <label htmlFor="" className="form-label mt-4">Street Address</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0" placeholder="House number and street name"/>
                                    <input type="text" name="" id="" className="form-control mt-2 p-2 rounded-0" placeholder="Appartment, suit etc"/>
                                </div>
                                <div className="col-12">
                                    <label htmlFor="" className="form-label mt-4">Town / City</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">State / County</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">Postcode / ZIP</label>
                                    <input type="text" name="" id="" className="form-control p-2 rounded-0" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">Phone</label>
                                    <input type="tel" name="" id="" className="form-control p-2 rounded-0" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="" className="form-label mt-4">Email Address</label>
                                    <input type="email" name="" id="" className="form-control p-2 rounded-0" />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 mt-4">
                                    <input onChange={handleCheckboxChange} checked={isChecked} type="checkbox" id="account" name="account" value="true" className="me-2"/>
                                    <label htmlFor="account"> Create an account</label>
                                </div>
                                {
                                    isChecked &&  <div>
                                        <input type="email" name="" id="" className="form-control p-2 mt-2 rounded-0" placeholder="Email" />
                                        <input type="password" name="" id="" className="form-control p-2 mt-2 rounded-0" placeholder="Password" />
                                        <input type="submit" className="btn btn-warning btn-lg rounded-0 mt-2" value="REGISTER" />
                                    </div>
                                }

                            </div>
                            <div className="row mt-5">
                                <h5>Additional information</h5>
                                <p>Order notes</p>
                                <textarea className="form-control" name="" id="" cols="30" rows="8" placeholder="Notes about your order..."></textarea>
                            </div>


                        </form>
                    </div>
                    <div className="col-md-5">
                        <h5>Your order</h5>
                        <div className="your-order-wrap">
                            <ul className="d-flex justify-content-between border-bottom pb-3">
                                <li><b>Product</b></li>
                                <li><b>Total</b></li>
                            </ul>
                            <ul className="border-bottom py-3">
                                <li className="d-flex justify-content-between p-2">
                                    <span>Product Name X 1</span>
                                    <span >$100</span>
                                </li>
                                <li className="d-flex justify-content-between  p-2">
                                    <span>Product Name X 1</span>
                                    <span >$100</span>
                                </li>
                            </ul>
                            <ul className="d-flex justify-content-between border-bottom p-4">
                                <li><b>Shipping</b></li>
                                <li>Free shipping</li>
                            </ul>

                            <ul className="d-flex justify-content-between border-bottom p-4">
                                <li><b>Total</b></li>
                                <li>$200</li>
                            </ul>
                            <div className="accordion-list">
                                <Accordion defaultActiveKey="0">
                                    <Accordion.Item eventKey="0">
                                        <Accordion.Header>Direct bank transfer</Accordion.Header>
                                        <Accordion.Body>
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="1">
                                        <Accordion.Header>Check payments</Accordion.Header>
                                        <Accordion.Body>
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                    <Accordion.Item eventKey="2">
                                        <Accordion.Header>Cash on delivery</Accordion.Header>
                                        <Accordion.Body>
                                        Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.
                                        </Accordion.Body>
                                    </Accordion.Item>
                                </Accordion>
                            </div>
    
                        </div>
                        <button className="btn btn-warning p-3 mt-3 w-100 rounded-0" >PLACE ORDER</button>
                        
                    </div>
                </div>
            </div>
            
        </section>
    );
};

export default CheckoutForm;