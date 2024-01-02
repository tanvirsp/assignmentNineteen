import ProductCollection from "../Components/Product/ProductCollection";
import PageTitle from "../Components/Shared/PageTitle";


const SearchResult = () => {
    return (
        <>
            <PageTitle title={"Search Result"} />
            <ProductCollection />
        </>
    );
};

export default SearchResult;