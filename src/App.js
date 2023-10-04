import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootLayout from "./pages/RootLayout";
import HomePage from "./pages/Home";
import ProductPage from "./pages/Products";
import ProductDetailsPage from "./pages/ProductDetails";
import ErrorPage from "./pages/Error";


const router = createBrowserRouter([
  {
    path : '/' , 
    element : <RootLayout />,
    errorElement : <ErrorPage />,
    children : [
    { path : '/' , element : <HomePage /> },
    { path : '/products' , element : <ProductPage /> },
    { path : '/products/:productId' , element : <ProductDetailsPage /> }
  ]
}
]);

function App() {
  return <RouterProvider router= {router}/>;
}

export default App;
