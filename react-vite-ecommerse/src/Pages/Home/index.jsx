import { useState, useEffect } from "react"
import Layout from "../../Component/Layout"
import Card from "../../Component/Card/indesx"
import ProductDetail from "../../Component/ProductDetail"

const Home = () => {

    const [items, setItems] = useState(null); 
    useEffect(() => {
        fetch('https://api.escuelajs.co/api/v1/products')
            .then(response => response.json())
            .then(data => setItems(data))
      }, [])
     console.log(items);
      
  return (
    <Layout>
     Home 
     <div className='grid gap-x-0 gap-y-10 grid-cols-4 w-full max-w-screen-md'>
        {
          items?.map((item) => (
          <Card key={item.id} data={item} />
          ))     
        } 
     </div>
     <ProductDetail />
    </Layout>
  )
}

export default Home