import React from 'react';
import Product from '../components/product'
import SearchBar from './searchbar';
import { Link } from 'react-router-dom';

class Products extends React.Component {

    render() {
        const {products, images, onLike, onIncrement} = this.props;
        return (
     <div className="container">
        <div className="conte">
         <p className='te'>Liste des produits dispo: </p>
         <p className='msg'>Cliquez autant de fois sur acheter pour détérminer la quantité.</p>
         <Link to="products/new" className='btn btn-primary' >Ajouter un produit</Link>
         </div>
      <div className='row content'>
        
           {products.map(m => 
           <div className="col-lg-3"
           key={m.id}
           >
           <Product
           product = {m}
           image = {images[m.imgUrl]}
           onLike = {onLike}
           onIncrement = {onIncrement}
           />
           </div>
           )
           }

      </div>
     </div>
        );
    }
}
 
export default Products;