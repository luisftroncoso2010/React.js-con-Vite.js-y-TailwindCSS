import { createContext, useState } from 'react'

/* Se crea el contexto */
const ShoppingCartContext = createContext()

const ShoppingCartProvider = ({ children }) => {

  const [count, setCount] = useState(0); 

  return (    
    /* Se usa el contesto y se le coloca el provaider */
    <ShoppingCartContext.Provider 
      value={{count, setCount}}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

