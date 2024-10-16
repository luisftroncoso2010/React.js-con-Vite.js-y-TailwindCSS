import './App.css'
import Home from '../Home'
import MyAccount from '../MyAccount'
import MiOrder from '../MyOrder'
import MyOrders from '../MyOrders'
import NotFound from '../NotFound'
import SignIn from '../Signin'


function App() {
  return (
    <div className='bg-red-100'>
      
      <Home></Home>
      <MyAccount></MyAccount>
      <MiOrder></MiOrder>
      <MyOrders></MyOrders>
      <NotFound></NotFound>
      <SignIn></SignIn>

    </div>
  )
}

export default App
