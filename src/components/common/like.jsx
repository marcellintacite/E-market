import React from 'react';

const Like = props => {
    const {onLike, product} = props;
    let classes = "fa fa-heart ac";
    if(!product.liked) classes = "far fa-heart ac";

    return ( 
        <i onClick={()=> onLike(product)} className={classes}></i>
     );
}
 
export default Like;