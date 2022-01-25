import React from 'react';
const Input = ({nom, label, onChange, error, ...rest}) => {
    return ( 
       <div className='input'>
        <label htmlFor={nom}>{label}</label>
        <input
           name = {nom}
           {...rest}
           required
           onChange={onChange}
           
           className='form-input'
        />
        {error && <p className='alerte'>{error}</p>}
       </div>
     );
}
 
export default Input;