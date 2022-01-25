import React from 'react';
import { getProducts } from './../services/productsList';
class SearchBar extends React.Component {

    state = {
        string : ""
    }

    handleChange = e => {
        const string = e.target.value;
        this.setState({string})
    }
    render() { 
       
        // const {handleChange, value} = this.props;
        return (
            
            <div className="form-group search">
                <input 
                className='form-control' 
                placeholder='Cherchez un produit ...' 
                onChange={this.handleChange}
                type="text"
                name='Query'
                value={this.state.string}
                ></input>
            </div>
        );
    }
}
 
export default SearchBar;