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

  // Ger product by Category - Captar
  const [ searchByCategory, setSearchByCategory ] = useState(null)
 
    
  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
        .then(response => response.json())
        .then(data => setItems(data))
  }, [])   

  // Filter by Article. 
  const filteredItemsByTitle = (items, searchByTitle) =>{
    return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
  }

  // Filter by Category. Funcion para filtrar productos por categoria. Deja los productos que cumplen dicha categori
  const filteredItemsByCategory = (items, searchByCategory) => {           
    // Filtramo si cumple con dicha categoria seleccionada. 
    return items?.filter(item => item.category.name.toLowerCase().includes(searchByCategory.toLowerCase()))
  }

  // funcion para intercambiar para filtar por titulo o categoria
  const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
    if (searchType === 'BY_TITLE'){
      return filteredItemsByTitle(items, searchByTitle)
    }
    if (searchType === 'BY_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory)
    }
    if (searchType === 'BY_TITLE_AND_CATEGORY'){
      return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
    }
    if (!searchType){
      return items
    }
  }
  
  // Efecto para cargar los titulos y categorias de title.
  useEffect(() => {
    if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory))
    if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory))
    if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByTitle, searchByCategory))
    if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByTitle, searchByCategory))
  }, [ items, searchByTitle, searchByCategory ])  
    
  console.log('SearchByTitle: ', searchByTitle);
  console.log('searchByCategory: ', searchByCategory);
  console.log('filteredItems', filteredItems);
  
  
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
        setFilteredItems,
        searchByCategory, 
        setSearchByCategory 
      }}
    >
      {children}    
    </ShoppingCartContext.Provider>
  )
}

export  { ShoppingCartProvider, ShoppingCartContext }

