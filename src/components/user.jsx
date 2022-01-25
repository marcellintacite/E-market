import React from 'react';
import { getUsers } from '../services/user';
import Sidebar_menu from './profil/sidebar';
import bg from '../img/user1.png'
import Publicite from '../components/profil/publicite'
const User = ({imgURL}) => {
    const user = getUsers();

    return ( 
        <div className="container">
            <div className="couverture">
              <div className="profile_pic">
                  <div className="img"><img src={bg}></img>
                  </div>
              </div>
            </div>
            <div className="user_content">
                <div className="text">
                    <h2 className='user_name'>{user.length > 0 ? user[0].username : null}</h2>
                </div>
                
                <div className="row">
                    <div className="col-lg-3">
                        <Sidebar_menu 
                            user = {user}
                        />
                    </div>
                    <div className="col-lg-6">
                      <div className="milieu">
                        <h3>Vos produits</h3>
                         <div className="row">
                             {imgURL.map(m => 
                                <div className="col-6 images_pro" key={m}>
                                    <img src={m}></img>
                                </div>
                                )}
                         </div>
                      </div>
                       
                    </div>
                    <div className="col-lg-3">
                        <div className="left_bar">
                            <h3>Publicités</h3>

                            <Publicite imgURL = {imgURL[0]} text = "Gagnez une reduction de 5% à l'achat de votre kit Canal+"/>
                            <Publicite imgURL = {imgURL[8]} text = "Offre spéciaaaal: Achetez dans nos boutiques et benéficiez d'un mois d'abonnement internet."/>
                            <Publicite imgURL = {imgURL[12]} text = "Savon original à seulement 10$ le carton! Bonana"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default User;