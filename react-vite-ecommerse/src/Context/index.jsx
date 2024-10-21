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
  
  // Ceckput Side Menu Detail - Open/Close
  const [isCheckOutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false)
  const openCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(true)
  const closeCheckOutSideMenu = () => setIsCheckoutSideMenuOpen(false)
  
  // Poduct detail - Show product
  const [productToShow, setProductToShow] = useState({}); 
  
  //  Shopping  Cart . Add products to cart
  const [cartProducts, setcartProducts] = useState([]); 
  
  
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
        closeCheckOutSideMenu
      }}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

