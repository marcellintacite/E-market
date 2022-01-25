import React from 'react';
import { Link } from 'react-router-dom';
import { getUsers } from './../services/user';

class Panier extends React.Component {
    
    handleDelete = (produit)=> {
        alert(`Vous venez de supprimer ${produit.nom}`)
    }

    render() { 
        const {priceFil} = this.props;
        const produits = priceFil.filter(p => p.value > 0);
        const user = getUsers();

        if(produits.length === 0) return (
            <div className='container'>
            <p className='alerte'>Vous n'avez rien acheté comme produit.  

            <Link to={"/home"}>Cliquez ici </Link>
            </p>
            
            </div>)

        return (
        <div className='container'>
             <table className="table table-striped table-hover">
                 <thead>
                     <th>Produits</th>
                     <th>Prix Unitaire</th>
                     <th>Genre</th>
                     <th>Quantité</th>
                     <th>Aimé</th>
                     <th>Prix Total</th>
                     <th></th>
                 </thead>

                 <tbody>
                     {produits.map(produit => 
                        <tr key={produit.id}>
                            <td> 
                                <Link to={`products/${produit.id}`}>{produit.nom}</Link> 
                            </td>
                            <td>{produit.prix} $</td>
                            <td>{produit.genre}</td>
                            <td className='valu'>
                              <button className="btn btn-secondary btn-sm btn_panier">-</button>   
                                {produit.value}
                              <button className="btn btn-secondary btn-sm btn_panier">+</button> 
                            </td>
                            <td className='bgg'>{produit.liked ? "Oui" : "non"}</td>
                            <td className='bgg'>{produit.value * produit.prix} $</td>
                            <td>
                                <button 
                                className='btn btn-warning'
                                onClick={()=>this.handleDelete(produit)}
                                >Effacer</button>
                            </td>
                        </tr>
                        )}
                 </tbody>
             </table>

             <button className='btn btn-danger'>Proceder au paiement</button>
             {user.length === 0 && <span className='panier_danger'>* Veuillez vous connecter</span>}
        </div>
                );
    }
}
 
export default Panier;