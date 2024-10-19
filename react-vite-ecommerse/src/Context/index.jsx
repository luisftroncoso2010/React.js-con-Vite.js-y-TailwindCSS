import { createContext, useState } from 'react'

/* Se crea el contexto */
const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0); 
  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false); 

  const openProducDetail = () => setIsProductDetailOpen(true)
  const closeProducDetail = () => setIsProductDetailOpen(false)

  

  return (    
    /* Se usa el contesto y se le coloca el provaider */
    <ShoppingCartContext.Provider 
      value={{
        count, 
        setCount,
        isProductDetailOpen, 
        openProducDetail,
        closeProducDetail,
       
      }}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

