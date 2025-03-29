import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ItemList from '../components/ItemList'
import { clearCart } from '../utils/cartSlice'

const Cart = () => {
  
  const dispatch = useDispatch()
  const handleClearCart = ()=>{
    dispatch(clearCart())
  }

  //Subscribing to the Store
  const cart = useSelector((store)=>store.cart.items)
  
  return cart.length==0?
  (<div className='text-center font-medium px-20'>Cart is Empty, Please Add Items to checkout</div>)
  :
  (
    <div className="px-[5vw] md:px-[20vw]">
      <h1 className='text-center'>Cart</h1>
      <div className='text-center'>
        <button onClick={handleClearCart}
        className='bg-black text-white p-2 m-2 rounded-lg'>Clear Cart</button>
      </div>
      {cart.map((i, index)=>(
      <ItemList i={i} key={index}/>
    ))}
    </div>
  )
}

export default Cart