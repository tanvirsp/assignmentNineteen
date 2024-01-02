/* eslint-disable react/prop-types */


const ReviewCard = (props) => {
    const {text, name, designation, picture} = props.review;
    return (
        <div className="review-card">
            <p className="text-center">{text}</p>
            <div className="d-flex align-items-center mt-3">
                <img src={picture} alt="Picture" />
                <div >
                    <h6>{name}</h6>
                    <p>{designation}</p>
                </div>
            </div>
            
        </div>
    );
};

export default ReviewCard;