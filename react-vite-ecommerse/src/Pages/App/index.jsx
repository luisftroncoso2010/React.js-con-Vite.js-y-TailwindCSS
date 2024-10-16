import { BrowserRouter, useRoutes } from 'react-router-dom'
import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MyOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'


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
    <BrowserRouter>
    
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
