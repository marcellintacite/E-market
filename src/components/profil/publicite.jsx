import React from 'react';
const Publicite = ({imgURL, text}) => {
    const publicite = {
        Width: '100%',
        padding: '10px',
        height: 'auto',
        marginBottom: '10px',
    }
    const imgStyle = {
        width: "100%"
    }
    const h2 = {
        fontSize : "14px",
        paddingTop: "10px"
    }
    return ( 
        <div className="publicite" style={publicite}>
            <img src={imgURL} style={imgStyle}></img>
            <h2 style={h2}>{text}</h2>
        </div>
     );
}
 
export default Publicite;