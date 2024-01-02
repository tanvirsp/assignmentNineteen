
import { Link } from 'react-router-dom';

const LoginForm = () => {
    return (
        <section className="login-section">
           <form  >
                <input className='form-control p-3' type="email" name="email"  placeholder='Enter Your Email' required/>
                <input  className='form-control p-3 my-3' type="password" name="password" placeholder='Enter Your Password' required />
                <input className='btn login-btn w-100 p-3' type="submit" value="Login" />
           </form>
           <p className="mt-3">Need an account? <span> <Link to ="/register" className="short-link">Register Now</Link></span></p>
            
        </section>
    );
};

export default LoginForm;