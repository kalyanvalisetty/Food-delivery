import React from 'react';
import { MENU_LOGO } from "../utils/constants";
import { useDispatch, useSelector } from 'react-redux';
import { addItem, removeItem } from '../utils/cartSlice';

const ItemList = ({ i }) => {
  const { name, imageId, description } = i;
  const price = i?.price/100 || i?.defaultPrice/100;
  const dispatch = useDispatch();

  // Select the cart items from Redux state
  const cartItems = useSelector((state) => state.cart.items);
  
  // Find the item in the cart to read its count
  const cartItem = cartItems.find(item => item.id === i.id);
  const itemCount = cartItem ? cartItem.count : 0;

  const handleAddItem = () => {
    dispatch(addItem(i));
  }

  const handleRemoveItem = () => {
    dispatch(removeItem(i));
  }

  return (
    <div className="border-b-2 border-[#4d4b4b3a] flex justify-between gap-6 p-4 m-2">
      <div>
        <p className='font-medium'>{name}</p>
        <p>₹.{price}</p>
        <p className="text-xs text-gray-500 hidden md:block">{description}</p>
      </div>
      <div className='relative'>
        {imageId ? (
          <img 
            className='min-w-40 max-w-40 h-40 object-cover' 
            src={`${MENU_LOGO}${imageId}`} 
            alt={name} 
          />
        ) : null}
        <div 
          className={`bg-white text-green-400 cursor-pointer rounded-md px-4 py-2 font-medium text-center ${imageId ? 'absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]' : 'border-2 border-[#0505053b] mr-8'}`}
        > 
          {itemCount==0?
            <span onClick={handleAddItem} className='text-green-500 px-4'>ADD</span>
          :
          <span className='flex items-center gap-4'>
          <span onClick={handleRemoveItem} className='text-red-500 text-xl'>-</span>
          <span className='text-gray-500'>{itemCount}</span>
          <span onClick={handleAddItem} className='text-green-500 text-xl'>+</span>
          </span>} 
        </div>
      </div>
    </div>
  );
}

export default ItemList;
