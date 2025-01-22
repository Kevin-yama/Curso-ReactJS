import React from 'react';
import './SearchApp.css'


function SearchApp({
  setBuscadorValue,
  buscadorValue
}) {


    return (
      
        <input placeholder="barrer la casa" 
        onChange={ 
          (event) => {
            setBuscadorValue(event.target.value);
            
          }
        }/>
      
      
    );
    
  }

export { SearchApp };