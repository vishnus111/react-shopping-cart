import React ,{useContext}from 'react';
import { ShopContext } from '../../context/ShopContext';

const Product = (props) => {
    const { id,ProductName,price,productImage} = props.data;
    const {addToCart,cartItems} = useContext(ShopContext);

    const cartItemAmount = cartItems[id]
  return (
    <div className="product">
      <img src={productImage}  alt=''/>
      <div className="description">
       <p><b>{ProductName}</b></p>
       <p>${price}</p>
      </div>
      <button className='addtocartbutton' onClick={()=> addToCart(id)}>
      Add to cart {cartItemAmount > 0 && <> ({cartItemAmount})</>}
      </button>
    </div>
  )
}

export default Product
