import React from 'react';

const Price = props => {
    const {prices, onPrice, selectedPrice} = props;
    console.log(selectedPrice)
    return ( 
        <div className='price'>
             <span className='priceText'>Prix : </span>
             <div className='prices'>
             {prices.map(p => 
                <span 
                className={(p === selectedPrice) ? "priceBox active":"priceBox"} 
                key={p.id}
                onClick={()=>onPrice(p)}
                >{p.type} $</span>
                )}
              </div>
        </div>
     );
}
 
export default Price;