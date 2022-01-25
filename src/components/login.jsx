import React from 'react';
import { Link } from 'react-router-dom';
import Input from './common/input';
import {getUsers, addUser} from '../services/user'
import { errors } from 'joi-browser';

class Login extends React.Component {
    state = {
      data : {username: "", password: "", logedIn : ""},
      errors: {}
    }

    handleUser = ({target}) => {
      const data = {...this.state.data};
      data.logedIn = true;
      data[target.name] = target.value;
      this.setState({data})
    }
    
    validate = ()=> {
      const errors = {}
      const {username, password} = this.state.data;
      if(username.trim() === "") {
        errors.username = "Le prenom est obligatoire *"
      }
      if(password.trim() === "") {
        errors.password = "Le password est obligatoire *"
      }
      return Object.keys(errors) === 0 ? null : errors
    }
    handleSubmit = e => {
      e.preventDefault();
      const errors = this.validate();
      const data = {...this.state.data};
      this.setState({errors, data})
      addUser(this.state.data);
      
      {this.props.history.push("/home")}
     
    }

    render() { 
        const {data, errors} = this.state;
        return (  
       <div className="parent">
        <div className='form' onSubmit={this.handleSubmit}>
            <h3>Connexion</h3>
            <form className='my-form'>
                <Input
                  nom="username"
                  placeholder="Nom et prenom"
                  onChange = {this.handleUser}
                  value = {data.username}
                  error = {errors.username}
            
                />

                <Input
                  nom="password"
                  type='password'
                  placeholder="Password"
                  onChange={this.handleUser}
                  error = {errors.password}
                />

                <button type='submit' className='bouton'>Connexion</button>
            </form>

            <p className='sign'>Vous n'avez pas de compte ? <Link to="/signin" className='signin'>Inscrivez-vous ici</Link></p>
        </div>
       </div>
        );
    }
}
 
export default Login;