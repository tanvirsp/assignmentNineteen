/* eslint-disable react/prop-types */


const PageTitle = ({title}) => {
    
    return (
        <section className="page-title-section" >
            <div className="container">
             <h3 className="mt-5">{title}</h3>

            </div>
            
        </section>
    );
};

export default PageTitle;