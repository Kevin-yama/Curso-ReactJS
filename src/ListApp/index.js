import './ListApp.css'

function ListApp({ children }) {
    return (
      <ul className="ListApp">
        {children}
      </ul>  
      
    );
    
  }

export { ListApp };