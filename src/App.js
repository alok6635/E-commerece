import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Import createBrowserRouter from react-router-dom
import { Header } from "./pages/Header/Header";
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Footer from './pages/Footer/Footer';

//creating the routing-
let routes = createBrowserRouter([
   {
    path: '/',element:<Header/>,
     children:[
      { path: '/',element:<Home/>},
      { path: '/products',element:<Products/>},
    ]
  }
])

function App() {
  return (
    <>
      <RouterProvider router={routes}/>
{/* link footer here  */}
      <Footer/>
    </>
  );
}

export default App;
