import pic from '../../assets/img/client-1.webp'
import ReviewCard from './ReviewCard';

const ReviewContainer = () => {
    const reiewData = [
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae molestiae ducimus maxime!',
            name: 'Regan Rosen',
            designation: 'Client',
            picture: pic
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae molestiae ducimus maxime!',
            name: 'Regan Rosen',
            designation: 'Client',
            picture: pic
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae molestiae ducimus maxime!',
            name: 'Regan Rosen',
            designation: 'Client',
            picture: pic
        },
        {
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic recusandae molestiae ducimus maxime!',
            name: 'Regan Rosen',
            designation: 'Client',
            picture: pic
        },
    ]


    return (
        <section>
            <div className="container">
                <h3 className='text-center mb-5'>Client Feedback</h3>
                <div className='review-grid'>
                    {
                        reiewData.map( (review, index) => <ReviewCard key={index} review={review} /> )
                    }
                </div>
    
            </div>
            
        </section>
    );
};

export default ReviewContainer;