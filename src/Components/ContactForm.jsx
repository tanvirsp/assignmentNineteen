

const ContactForm = () => {
    return (
        <section>
            <div className="container">
                <form className="contact-form" >
                    <div className="row">
                        <div className="col-md-6">
                            <input type="text" name=""  className="form-control p-2 my-2" placeholder="Your Name" />
                        </div>
                        <div className="col-md-6">
                            <input type="email" name=""  className="form-control p-2 my-2" placeholder="Your Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <input type="text" name=""  className="form-control p-2 my-2" placeholder="Subject" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12">
                            <textarea name="" id="" cols="30" rows="10" className="form-control  p-2 my-2"></textarea>
                            <input type="submit" className="btn btn-warning btn-lg mt-3" value="SEND MESSAGE" />
                        </div>
                    </div>
                </form>
            </div>
            
        </section>
    );
};

export default ContactForm;