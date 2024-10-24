import { createContext, useState, useEffect } from 'react'

/* Se crea el contexto */
const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  
  // Sopping Cart * Increment Quantity
  const [count, setCount] = useState(0); 

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 

  const openProducDetail = () => setIsProductDetailOpen(true)
  const closeProducDetail = () => setIsProductDetailOpen(false)
  
  // Ceckput Side Menu Detail - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  // Poduct detail - Show product
  const [productToShow, setProductToShow] = useState({}); 
  
  //  Shopping  Cart . Add products to cart
  const [cartProducts, setcartProducts] = useState([]); 
    
  // Shopping cart * Order
  const [ order, setOrder ] = useState([]) 

  // Get products
  const [items, setItems] = useState(null)
  // Filtrador
  const [filteredItems, setFilteredItems] = useState(null)

  // Get products by title - Captar 
  const [ searchByTitle, setsearchByTitle ] = useState(null)
  
  useEffect(() => {
      fetch('https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(data => setItems(data))
    }, [])   

    // Filter by Article
    const filteredItemsByTitle = (items, searchByTitle) =>{
      return items?.filter((item) => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }

    useEffect(() => {
      if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    }, [ items, searchByTitle ])  
    console.log('Items: ', items);
    console.log('Search: ', searchByTitle)    
    console.log('Filtered:', filteredItems)
    
  return (    
    /* Se usa el contesto y se le coloca el provaider */
    <ShoppingCartContext.Provider 
      value={{
        count, 
        setCount,
        isProductDetailOpen, 
        openProducDetail,
        closeProducDetail,
        productToShow, 
        setProductToShow,
        cartProducts, 
        setcartProducts,
        isCheckOutSideMenuOpen,
        openCheckOutSideMenu,
        closeCheckOutSideMenu,
        order, 
        setOrder,
        items,
        setItems,
        searchByTitle, 
        setsearchByTitle,
        filteredItems, 
        setFilteredItems
      }}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

