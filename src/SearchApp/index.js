import React from 'react';
import './SearchApp.css'
import { TodoContext } from '../TodoContext';


function SearchApp() {
  const {
    setBuscadorValue,
    
  } = React.useContext(TodoContext);
  return (    
    <input placeholder="barrer la casa" 
      onChange={ 
        (event) => {
          setBuscadorValue(event.target.value);       
        }
      }
    />            
  );
    
}

export { SearchApp };