import React from 'react';
const Sidebar_menu = ({user}) => {
    return (
        <div className='sidebar_user'>
              <div className="header">
                  <h1>Vos informations</h1>
                  <p>Username: <span>{user[0].username}</span></p>
                  <p>Password : <span>{user[0].password}</span></p>

                  <button className='btn btn-primary '>Modifier vos informations</button>
              </div>
              <div className="body_left">
                 <h3>Règles de confidentialité</h3>
                 <p>En vous inscrivant sur notre plateforme, vous avez accepté nos conditions et nos règlements suivants :

                  <ul>
                     <li>Vous devez payer avant d’être livré</li>
                     <li>Vous devez fournir une pièce d’identification pour prouver votre identité</li>
                     <li>Une fois la livraison n’est pas faite, vous devez signaler dans les 48h qui suivent</li>
                     <li>En invitant un membre, vous obtenez une réduction de 5% sur tous vos achats </li>
                     <li>Votre résidence doit être Bukavu, sinon ça sera difficile de faire la livraison</li>
                  </ul>
                 </p>
                 <form className='accept_form'>
                 <input name="accept" type="checkbox"/>
                 <span htmlFor='accept'>J'accepte les règles et conditions de E-market</span>
                 <button className='btn btn-primary'>Confirmer</button>
                 </form>
              </div>
        </div>
      );
}
 
export default Sidebar_menu;