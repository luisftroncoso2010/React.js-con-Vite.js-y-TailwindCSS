import { createContext, useState } from 'react'

/* Se crea el contexto */
const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {
  
  // Sopping Cart * Increment Quantity
  const [count, setCount] = useState(0); 

  // Product Detail - Open/Close
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 

  const openProducDetail = () => setIsProductDetailOpen(true)
  const closeProducDetail = () => setIsProductDetailOpen(false)
  
  // Poduct detail - Show product
  const [productToShow, setProductToShow] = useState({}); 
  //console.log(productToShow);
  
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
        setProductToShow       
      }}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

