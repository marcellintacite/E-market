import React from 'react';
import Product from './product';
import Products from './products';
import Sidebar from './sideBar';

class Progenre extends React.Component {
    render() { 
        return (
        <div className='container'> 
             <div className='row'>
                 <div className="col-lg-3">
                    <Sidebar/>
                 </div>
                 <div className='col-lg'>
                     <Products 
                          products = {this.props.products}
                          images = {this.props.imgURL}
                     />
                 </div>
             </div>
        </div>
        
        );
    }
}
 
export default Progenre;

