import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Error from "./pages/error/Error";
import Book from "./pages/book/Book";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "/books/:id",
		element: <Book />
	},
    {
        path: "*",
        element: <Error />
    }
]);

export default function App() {
	return <RouterProvider router={router} />
}
