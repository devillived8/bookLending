import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../components/layout/Layout";
import { Home } from "../pages/Home";
import { AboutAuthor } from "../pages/AboutAuthor";
import { AboutBook } from "../pages/AboutBook";
import { Characters } from "../pages/Characters";
import { Contacts } from "../pages/Contacts";
import { NotFound } from "../pages/NotFound";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {index: true, element: <Home />},
            {path: "about-author", element: <AboutAuthor />},
            {path: "about-book", element: <AboutBook />},
            {path: "characters", element: <Characters />},
            {path: "contacts", element: <Contacts />},
            {path: "*", element: <NotFound />},
        ],
    },
]);