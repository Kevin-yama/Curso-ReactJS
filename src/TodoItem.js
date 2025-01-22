import './TodoItem.css'
import { SiRetroarch } from "react-icons/si";
import { CompleteIcon }  from "./CompleteIcon"

function TodoItem (props){
    return(
      
      <li className="TodoItem">
      <CompleteIcon
        completed={props.completed}
        onCompleted={props.onCompleted}
      />
     
      <p className={`TodoItem-p 
          ${props.completed && "TodoItem-p--complete"}`}>
        {props.text} 
      </p>
       
       
      <span className="Icon-container  Icon-container-delete" 
        onClick={props.onDelete}
      >
      <SiRetroarch className='Icon-svg'  fill='gray' />
      </span>
    </li>
      
    );
  };
  export {TodoItem}