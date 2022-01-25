import React from 'react';
import { getProduct, saveProduct } from '../services/productsList'
import { getGenre } from './../services/genre';

class ProductsDetails extends React.Component {

    state = {
        data: {
            nom: "",
            detail: "",
            prix: "",
            genre: "",
            id:""
        },
        genre: [],
    }
    
    componentDidMount() {
        const genre = getGenre();
        this.setState({genre})
        const productId = this.props.match.params.id;
        if(productId === "new") return;
        const product = getProduct(productId);
        if(!product) return this.props.history.replace("/not-Found");
        let newProduct = [];
        product.map(p => newProduct = p);
        this.setState({data : this.mapModel(newProduct)})
    }

    mapModel = (product) => {
        return {
            nom: product.nom,
            detail: product.detail,
            prix: product.prix,
            genre: product.genre,
            id: product.id
        }
    }

    handleChange = e => {
          const label = e.target.name;
          const value = e.target.value;
          const data = {...this.state.data}
          data[label] = value;
          this.setState({data})
    }

    handleSubmit = e => {
        e.preventDefault();
        saveProduct(this.state.data)

        this.props.history.replace("/home")
    }
    render() {
        const {match, history} = this.props; 
        const {data, genre} = this.state;
        return (
        <div className='container'>
            <div className="col-8 m-5">
                  <form key={data.id} className='my-4' onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Nom: </label>
                      <input type="text" value={data.nom} className='form-control' onChange={this.handleChange} name='nom'></input>
                    </div>

                    <div className="form-group">
                        <label>Detail: </label>
                      <input type="text" value={data.detail} className='form-control' onChange={this.handleChange} name='detail'></input>
                    </div>

                    <div className="form-group">
                        <label>Prix: </label>
                      <input type="text" value={data.prix} className='form-control' onChange={this.handleChange} name='prix'></input>
                    </div>

                    <div className="form-group">
                        <label>Genre: </label>
                        <select name='genre' id='genre' className='form-control' onSubmit={this.handleChange}>
                            <option value=""/>
                            {genre.map(g => (
                                <option key={g.id} value={g.id}>{g.nom}</option>
                            ))}
                        </select>
                    </div>

                    <button type='submit' className='btn btn-primary' >Enreigistrer</button>

                  </form>
          </div>
        </div>
        );
    }
}
 
export default ProductsDetails;