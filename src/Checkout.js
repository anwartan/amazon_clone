import React from 'react'
import './Checkout.css'
import { Subtotal } from './Subtotal'
import { useStateValue } from './StateProvider'
import { CheckoutProduct } from './CheckoutProduct'
export const Checkout = () => {
    const [{basket},dispatch] = useStateValue()
    
    const countTotal = (basket)=>{
        if(basket.length!==0){
            console.log(basket)
            let total =0
            basket.forEach(item => {
                total+=item.price
            });
            return total
        }
        return 0

    }
    return (
        <div className="checkout">
            <div className="checkout_left">
                <img alt="" className="checkout_ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg?fbclid=IwAR3pn_BOSK4yOxdwM757A7S_kuDIenGRoQgN-FOh6ValmstJMQO8zYprOGc"></img>
                <div>
                    <h2 className="checkout_title">Your Shopping Basket</h2>
                    <div>
                        {
                            basket.map(item=>(
                                <CheckoutProduct
                                key={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                                rating={item.rating}
                                id={item.id}
                                ></CheckoutProduct>

                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="checkout_right">
                <Subtotal sum={basket?.length} total={countTotal(basket)}></Subtotal>
            </div>
        </div>
    )
}
