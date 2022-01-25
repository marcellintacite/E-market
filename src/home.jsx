import React from 'react';
import Sidebar from './components/sideBar';
import Products from './components/products';
import { getUsers } from './services/user';

class Home extends React.Component {
    render() { 
        const {handleGenre, selectedGenre, handlePrice, selectedPrice, priceFil, imgURL, handleLike, handleIncrement, handleChange, value} = this.props;

        const user = getUsers();
        return (
            <div className='container-fluid'>
      <div className='row'>
       <div className='col-md-2'>
            <Sidebar
            onClick = {handleGenre}
            selectedItem = {selectedGenre}
            onPrice = {handlePrice}
            selectedPrice = {selectedPrice}
            handleChange = {handleChange}
            value = {value}
            />
       </div>
       <div className='col-md'>
          {(user.length > 0) ? <p className='alert alert-success user'>Vous etes connecté en tant que <span className='user_ok'>{user[0].username}</span></p> : null}
          <Products
          products = {priceFil}
          images = {imgURL}
          onLike = {handleLike}
          onIncrement = {handleIncrement}
          />
        </div>
       </div>

     </div>
        );
    }
}
 
export default Home;