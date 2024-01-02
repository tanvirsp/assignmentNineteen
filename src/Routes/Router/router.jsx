import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Home from "../../Pages/Home";
import Login from "../../Pages/Login";
import Register from "../../Pages/Register";
import FAQ from "../../Pages/FAQ";
import PageNotFound from "../../Pages/PageNotFound";
import ThankYouPage from "../../Pages/ThankYouPage";
import Shop from "../../Pages/Shop";
import Contact from "../../Pages/Contact";
import Cart from "../../Pages/Cart";
import Checkout from "../../Pages/Checkout";
import PrivacyPolicy from "../../Pages/PrivacyPolicy";
import TermsAndConditions from "../../Pages/TermsAndConditions";
import Reviews from "../../Pages/Reviews";
import SearchResult from "../../Pages/SearchResult";
import Blog from "../../Pages/Blog";

const router = createBrowserRouter([
    {
        path: "/",
        element:  <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Register />
            },
            {
                path: "/faq",
                element: <FAQ />
            },
            {
                path: "/thankyou",
                element: <ThankYouPage />
            },
            {
                path: "/products",
                element: <Shop />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            {
                path: "/checkout",
                element: <Checkout />
            },
            {
                path: "/not-found",
                element: <PageNotFound />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            },
            {
                path: "/reviews",
                element: <Reviews />
            },
            {
                path: "/search-result",
                element: <SearchResult />
            },
            {
                path: "/blog",
                element: <Blog />
            },
            {
                path: "*",
                element: <PageNotFound />
            }
        ]
    }

])

export default router;