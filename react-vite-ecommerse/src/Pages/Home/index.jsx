import { useState, useEffect } from "react"
import Layout from "../../Component/Layout"
import Card from "../../Component/Card/indesx"

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
     <div className='grid gap-4 grid-cols-4 w-auto max-w-screen-lg'>
        {
          items?.map((item) => (
          <Card key={item.id} data={item} />
          ))     
        } 
     </div>
    </Layout>
  )
}

export default Home