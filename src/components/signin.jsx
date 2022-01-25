import React from 'react';
import { getUsers } from '../services/user';
import Input from './common/input';

class Signin extends React.Component {
    componentDidMount() {
       const user = getUsers();
    }
    render() { 
        return (
        <div className='registration'>
            <h2>Inscription</h2>
            <form className='form_signin'>
                <Input
                nom = "username"
                label="Nom utilisateur"
                />
            </form>
        </div>
        );
    }
}
 
export default Signin;
