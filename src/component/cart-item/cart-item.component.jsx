import { memo } from 'react';
import './cart-item.styles.scss';
const CartItem=memo(({cartItem})=> {
    const {id,name, imageUrl, price, quantity}=cartItem;
    return <div className='cart-item-container' key={id}>
    <img src={imageUrl} alt={name}/>
    <div className='item-details'>
    <span className='name'>{name}</span>
    <span className='price'>{price}$x{quantity}</span>
    </div>
    

    </div>
})
export default CartItem