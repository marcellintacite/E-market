import React from 'react';
import './App.css';
import Navbar from './components/navbar';
import { getProducts, getPrices } from '../src/services/productsList';
import { Redirect, Route, Switch } from 'react-router-dom';
import { getUsers } from './services/user';


//Images rendering
import one from '../src/img/products/1.jpg'
import two from '../src/img/products/citron.jpg'
import three from '../src/img/products/5.jpg'
import four from '../src/img/products/10.jpg'
import five from '../src/img/products/9.jpg'
import six from '../src/img/products/13.jpg'
import seven from '../src/img/products/20.jpg'
import eight from '../src/img/products/14.jpg'
import nine from '../src/img/products/6.jpg'
import ten from '../src/img/products/12.jpg'
import eleven from '../src/img/products/21.jpg'
import twelve from '../src/img/products/8.jpg'
import savon from '../src/img/products/savon.jpg'
import Sidebar from './components/sideBar';
import { indexOf } from 'lodash';
import Home from './home';
import ProductDetails from './components/productDetail';
import NotFound from './components/not-Found';
import Panier from './components/panier';
import Login from './components/login';
import Signin from './components/signin';
import User from './components/user';

class App extends React.Component {
  state = {
    products: getProducts(),
    queryString: "",
    pageSize: 5,
    imgURL : [one, two, three, four, five, six, seven, eight, nine, ten, eleven, twelve,savon]
  }

  handleLike = product => {
    const products = [...this.state.products];
    const index = products.indexOf(product);
    products[index] = {... products[index]};
    products[index].liked = !products[index].liked;
    this.setState({products})
  }

  handleIncrement = product=> {
      const products = [...this.state.products]
      const index = products.indexOf(product)
      products[index] = {...products[index]}
      products[index].value++;
      this.setState({products})
    }

  handleGenre = genre => {
    this.setState({selectedGenre : genre})  
  }

  handlePrice = price => {
    this.setState({selectedPrice : price})
  }

  handleChange = target => {
    this.setState({queryString : target})
  }

 
  handleChangeUser = e => {
    this.setState({user: e.target.value})
  }
filtredGenre () {
  const {selectedGenre, products, imgURL, selectedPrice, queryString} = this.state;
  let filtred = products;
  if(queryString) {
    filtred = products.filter(m => m.nom.toLowerCase().match(queryString.toLowerCase()))
  }
  else
    if(selectedGenre) {
      filtred = products.filter(m => m.genre === selectedGenre.nom);
        if(selectedGenre.nom === "Tous") {
          filtred = products;
        }
  }
  else filtred = products;

  return filtred
}


priceFil() {
  const {selectedPrice} = this.state;
  const filtred = this.filtredGenre();
  let priceFil = []
  if(selectedPrice) {
    priceFil = filtred.filter(m => m.prix <= selectedPrice.type)

    if(selectedPrice.type === "Tous") {
      priceFil = filtred
    }
  }
  else {
    priceFil = filtred
  }

  return priceFil
}


  render() { 
    const totalItems = this.state.products.filter(m => m.value > 0).length;
    const {selectedGenre, products, imgURL, selectedPrice} = this.state;
    const user = getUsers();
    const priceFil = this.priceFil();
    return (
    <div>
      <Navbar
        item = {totalItems}
        products = {products}
      />
      <Switch>
        <Route path="/home" component={(props)=> <Home 
            selectedGenre ={selectedGenre}
            priceFil = {priceFil}
            imgURL = {imgURL}
            queryString={this.state.queryString}
            selectedPrice = {selectedPrice}
            handleGenre = {this.handleGenre}
            handleIncrement = {this.handleIncrement}
            handleLike = {this.handleLike}
            handlePrice = {this.handlePrice}
            handleChange = {this.handleChange}
            value = {this.state.queryString}
            {...props}
        />}/>
        <Route path="/not-Found" component={NotFound}/>
        <Route path="/panier" component={()=> <Panier priceFil ={priceFil}/>}/>
        <Route path="/products/:id" component={ProductDetails}/>
        <Route path="/login" component={Login}/>
        <Route path="/signin" component={Signin}/>
        {user.length === 0 ? <Redirect from='/user' to="/home" exact/> : null}
        <Route path="/user" component = {()=><User imgURL = {this.state.imgURL}/>}/>
        <Redirect from='/' to="/home" exact/>
        <Redirect to="/not-Found"/>
      </Switch>
    </div>
    );
  }
}
 
export default App;
