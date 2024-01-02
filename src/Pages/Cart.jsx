import CartTable from "../Components/Cart/CartTable";
import PageTitle from "../Components/Shared/PageTitle";


const Cart = () => {
    return (
        <>
            <PageTitle title={"CART"} />
            <CartTable />
        </>
    );
};

export default Cart;