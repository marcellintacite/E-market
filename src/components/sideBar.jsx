import React from 'react';
import {getGenre, getPrices} from '../services/genre'
import Price from './price';
import { getProducts } from './../services/productsList';
class Sidebar extends React.Component {

    state = {
        string : "",
        products: []
    }

    componentDidMount () {
        const products = getProducts();
        this.setState({products})
    }

    handleChange = e => {
        const string = e.target.value;
        const products = [...this.state.products];
        const searched = products.filter(p => p.nom.toLowerCase().match(string))
        console.log(searched)
        this.setState({string, products: searched})
    }
    
    render() {
        
        const {onClick, selectedItem, onPrice, selectedPrice, handleChange, value} = this.props; 
        const marc = [{id:10, nom:'Tous'}, ...getGenre()];
        const oui = [{id:5, type:'Tous'}, ...getPrices()];
        return (
            <div className='sidebar'>

                <h4>Filtres</h4>

                <div className="genre">
                    <span className='genreName'>Catégories</span>
                    <ul>
                        {marc.map(g => <li
                        onClick={()=>onClick(g)}
                        key={g.id}
                        className={ (g === selectedItem) ? "list active":'list'}
                        >{g.nom}</li>)}
                    </ul>
                </div>

                <Price 
                prices = {oui}
                onPrice = {onPrice}
                selectedPrice = {selectedPrice}
                />

                <input 
                className='form-control ii' 
                placeholder='Cherchez un produit ...' 
                onChange={this.handleChange}
                type="text"
                name='Query'
                value={this.state.string}
                ></input>
                {/* <SearchBar
                    handleChange = {handleChange}
                    value = {value}
                    /> */}
            </div>
            );
    }
}
 
export default Sidebar;