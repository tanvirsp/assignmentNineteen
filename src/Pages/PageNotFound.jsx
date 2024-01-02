import image  from '../assets/img/not-found.png'

const PageNotFound = () => {
    return (
        <section>
            <div className='container text-center'>
             <img className='w-50' src={image} alt="404 not found" />
            </div>
            
        </section>
    );
};

export default PageNotFound;