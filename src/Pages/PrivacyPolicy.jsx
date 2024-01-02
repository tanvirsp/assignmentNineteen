import PageTitle from "../Components/Shared/PageTitle";


const PrivacyPolicy = () => {
    return (
        <section>
            <PageTitle title={"Privacy Policy"} />
            <div className="container">
                <h4 className="p-5 text-center">WHAT PERSONAL DATA WE COLLECT AND WHY WE COLLECT IT</h4>
                <div className="py-4">
                    <h6>1. COMMENTS</h6>
                    <small>
                        When visitors leave comments on the site we collect the data shown in the comments form, and also the visitor’s IP address and browser user agent string to help spam detection.

                        An anonymized string created from your email address (also called a hash) may be provided to the Gravatar service to see if you are using it. The Gravatar service privacy policy is available here: https://automattic.com/privacy/. After approval of your comment, your profile picture is visible to the public in the context of your comment.
                    </small>
                </div>
                <div className="py-4">
                    <h6>2. MEDIA</h6>
                    <small>
                        If you upload images to the website, you should avoid uploading images with embedded location data (EXIF GPS) included. Visitors to the website can download and extract any location data from images on the website.
                    </small>
                </div>
                <div className="py-4">
                    <h6>3. CONTACT FORMS</h6>
                    <small>
                        If you leave a comment on our site you may opt-in to saving your name, email address and website in cookies. These are for your convenience so that you do not have to fill in your details again when you leave another comment. These cookies will last for one year.

                        If you have an account and you log in to this site, we will set a temporary cookie to determine if your browser accepts cookies. This cookie contains no personal data and is discarded when you close your browser.

                        When you log in, we will also set up several cookies to save your login information and your screen display choices. Login cookies last for two days, and screen options cookies last for a year. If you select “Remember Me”, your login will persist for two weeks. If you log out of your account, the login cookies will be removed.

                        If you edit or publish an article, an additional cookie will be saved in your browser. This cookie includes no personal data and simply indicates the post ID of the article you just edited. It expires after 1 day.
                    </small>
                </div>
                <div className="py-4">
                    <h6>4. EMBEDDED CONTENT FROM OTHER WEBSITES</h6>
                    <small>
                        Articles on this site may include embedded content (e.g. videos, images, articles, etc.). Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.

                        These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracing your interaction with the embedded content if you have an account and are logged in to that website.
                    </small>
                </div>
                <div className="py-4">
                    <h6>5. HOW LONG WE RETAIN YOUR DATA</h6>
                    <small>
                        If you leave a comment, the comment and its metadata are retained indefinitely. This is so we can recognize and approve any follow-up comments automatically instead of holding them in a moderation queue.

                        For users that register on our website (if any), we also store the personal information they provide in their user profile. All users can see, edit, or delete their personal information at any time (except they cannot change their username). Website administrators can also see and edit that information.
                    </small>
                </div>
                <div className="py-4">
                    <h6>6. WHAT RIGHTS YOU HAVE OVER YOUR DATA</h6>
                    <small>
                        If you have an account on this site, or have left comments, you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. You can also request that we erase any personal data we hold about you. This does not include any data we are obliged to keep for administrative, legal, or security purposes.
                    </small>
                </div>
                <div className="py-4">
                    <h6>7. WHERE WE SEND YOUR DATA</h6>
                    <small>
                        Visitor comments may be checked through an automated spam detection service.
                    </small>
                </div>
            </div>
            
        </section>
    );
};

export default PrivacyPolicy;