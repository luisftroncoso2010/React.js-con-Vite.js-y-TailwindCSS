import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusIcon, CheckIcon} from '@heroicons/react/24/solid'

const Card = (data) => {
  
  const context = useContext(ShoppingCartContext)

  /* Funcion que resive la data, abre el detalle del producto */
  const showProductDetail = (productDetail) => {
    context.openProducDetail()
    context.setProductToShow(productDetail)
  }

  const addProductsToCart = (event, productData) => {
    event.stopPropagation()
    context.setCount(context.count + 1)
    context.setcartProducts([...context.cartProducts, productData])
    context.openCheckOutSideMenu()
    context.closeProducDetail()
  }

  /* validar si un elemento esta agregado o no */
  const renderIcon = (id) => {
    const isInCart = context.cartProducts.filter(product => product.id === id).length > 0

    if(isInCart){
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-black w-6 h-6 rounded-full m-2 p-1'>
          <CheckIcon className='h-6 w-6 text-white' />
        </div>
      )
    }else{
      return (
        <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
          onClick={(event) => {addProductsToCart(event, data.data)}} >
          <PlusIcon className='h-6 w-6 text-black' />
        </div>
      )
    }
  }
  
  return (
    <div className='bg-white cursor-pointer w-32 h-full rounded-full'
      onClick={() => showProductDetail(data.data)}>
      <figure className='relative mb-2 w-full h-4/5'>
        <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5' >
          {data.data.category.name}
        </span>
        <img className='w-full h-full object-cover rounded-lg ' src={data.data.category.image} alt={data.data.title} />
        {renderIcon(data.data.id)}
      </figure>
      <p className='flex justify-between'>
        <span className='text-xs font-light'>{data.data.title}</span>
        <span className='text-md font-medium'>${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card
