import { Link } from "react-router-dom";


const RegisterForm = () => {
    return (
        <section className="login-section">
           <form  >
                <input  className='form-control p-3 mb-3' type="text" name="name" placeholder="Enter Your Name" required />
                <input  className='form-control p-3' type="email" name="email"  placeholder='Enter Your Email' required/>
                <input  className='form-control p-3 my-3' type="password" name="password" placeholder='Enter Your Password' required />
                <input  className='form-control p-3 my-3' type="tel" name="phone"  placeholder='Enter Your Phone Number' required/>
                <input className='btn login-btn w-100 p-3' type="submit" value="Register" />
           </form>
           <p className="mt-3">Already have an account? <span> <Link to ="/login" className="short-link">Login Now</Link></span></p>
            
        </section>
    );
};

export default RegisterForm;