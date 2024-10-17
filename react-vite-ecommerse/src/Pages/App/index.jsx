import { BrowserRouter, useRoutes } from 'react-router-dom'
import ShoppingCartProvider from '../../Context'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'
import Navbar from '../../Component/Navbar'
import './App.css'

/* Funcion para retornar las rutas */
const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home />},    
    { path: '/my-account', element: <MyAccount />},    
    { path: '/my-order', element: <MyOrder />},    
    { path: '/my-orders', element: <MyOrders />},    
    { path: '/sign-in', element: <SignIn />},
    { path: '/*', element: <NotFound />},    
  ])
  return routes
}


function App() {
  
  return (
    <ShoppingCartProvider>
      <BrowserRouter>    
        <AppRoutes />
        <Navbar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
