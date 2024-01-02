import PageTitle from "../Components/Shared/PageTitle";

const TermsAndConditions = () => {
    return (
        <>
            <PageTitle title={"Terms & Conditions"} />
            <section>
                <div className="container">
                    <div className="py-4">
                        <h6>Introduction</h6>
                        <small>
                        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com. <br />

                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions. <br />

                        Minors or people below 18 years old are not allowed to use this Website.
                        </small>
                    </div>
                    <div className="py-4">
                        <h6>Intellectual Property Rights</h6>
                        <small>
                            Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website. <br /><br />

                            You are granted limited license only for purposes of viewing the material contained on this Website.
                        </small>
                    </div>
                    <div className="py-4">
                        <h6>Restrictions</h6>
                        <small>
                            Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                        </small>
                    </div>
                    <div className="py-4">
                        <h6>Your Content</h6>
                        <small>
                        In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media. <br /><br />

                        Your Content must be your own and must not be invading any third-partys rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.
                        </small>
                    </div>
                </div>
            </section>
        </>
    );
};

export default TermsAndConditions;