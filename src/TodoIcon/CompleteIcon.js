import React from "react";
import { TodoIcon } from './'

function CompleteIcon({completed , onCompleted}){
    return (
        <TodoIcon 
            type="check"
            color={completed ? 'green' : 'gray'}
            onClick={onCompleted}
        />
    )

}
export {CompleteIcon} ;