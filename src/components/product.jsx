import React from 'react';
import Like from './common/like';
import {Link} from 'react-router-dom'


class Product extends React.Component {

    render() { 
        const {product, image, onLike, onIncrement} = this.props;

        let Qtclass = 'qt ';
        if(product.value === 0) Qtclass += 'no';
        return (
            <div className='carte'>
                <img src={image}></img>
                <Like 
                  onLike = {onLike}
                  product = {product}
                />
                <span className={Qtclass}>Quantité : {product.value}</span>
                <div className="text">
                    <Link className='lie' to={`/products/${product.id}`}>{product.nom}</Link>
                  <div className="head">
                    <span className="prix">{product.prix} $</span>
                    <span className="cat">{product.genre}</span>
                  </div>
                    <p className='bd'>{product.detail}</p>

                    <button className='btn button'
                    onClick={()=> onIncrement(product)}
                    >Acheter
                     <i className='fas fa-shopping-bag'></i>
                    </button>
                </div>
            </div>
        );
    }
}
 
export default Product;