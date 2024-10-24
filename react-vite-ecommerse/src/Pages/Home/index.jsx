import { useContext } from "react"
import Layout from "../../Component/Layout"
import Card from "../../Component/Card"
import { ShoppingCartContext } from '../../Context';
import ProductDetail from "../../Component/ProductDetail"

const Home = () => {
  const context = useContext(ShoppingCartContext)
    
  const renderView = () => {
    if(context.searchByTitle?.length > 0){
      if(context.filteredItems?.length > 0){
        return(
          context.filteredItems?.map((item) => (
            <Card key={item.id} data={item} />
          ))          
        )
      }else{
        return(
          <div>We dont´t have results :(</div>
        )
      }
    }else{
      return(
        context.items?.map((item) => (
          <Card key={item.id} data={item} />
        ))  
      )
    }
  }

    return (
      <Layout>
        <div className='flex justify-center items-center relative w-80 mb-4'>      
        <h1  className="font-medium text-xl">Exclusive Products</h1>  
      </div>
        <input
          type="text"
          placeholder="Search a product"
          className='rounded-lg border border-balck w-80 p-4 mb-4 focus:outline-none'
          onChange={(event) => context.setsearchByTitle(event.target.value)} />
        <div className='grid gap-x-0 gap-y-10 grid-cols-4 w-full max-w-screen-sm'>
          { renderView() }  
        </div>
      <ProductDetail />          
    </Layout>
  )
}

export default Home