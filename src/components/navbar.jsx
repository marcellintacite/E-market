import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from '../services/user';
import user1 from '../img/user1.png'


const Navbar = props => {

    const navbarClass = {
        background: '#4c8fff',
        width: '100%',
        height: '55px',
        display: 'flex',
        alignItems: 'space-between',
        padding: '10px',
        paddingLeft: '20px',
        paddingRight: '20px',
    }
    const {item} = props;
    const user = getUsers();
        return ( 
        <div className='navbar' style={navbarClass}>
            <Link className='logo' to="/home">E-Market</Link>
            <Link className='fa fa-home' to="/home"></Link>

            <div className='nav_ico'>
                <Link className='fa fa-shopping-basket' to="/panier">   
                </Link>
                <h4>{item}</h4>
                {user.length === 0 ? <Link className='fa fa-user' to="/login"></Link> : null}
                
                {user.length > 0 ? <Link to="/user"><img src={user1} className='img'></img>
                </Link> :null} 

            </div>
        </div>
     );
}
 
export default Navbar;