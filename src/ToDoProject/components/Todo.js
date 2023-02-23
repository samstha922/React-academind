// props are imp. for using the reusuable elements
// state are imp. to changing what we see on the sccreeen dynamically....adding, removing elements, showing and overlaying elements

import { useState } from "react"
// u import {Modal} only when u do export const else on export default do as above
import Modal from './Modal'
import Backdrop from './Backdrop'
const Todo = (props) => {
    // we need setters in the state as below : cuz whenever you call this state changing fxn react would re-execute the component fxn to which this state belong and re-evaluate the experessions and update the value on the screen
    const [showModal, setShowModal] = useState(false)
    const deleteHandler= ()=>{
       console.log('clicked', props.title)
       setShowModal(true)  
        
    }

    // create a fxn to close the modal and set the state in it....pass this fxn in the props of the inside component rather than passing the state.
    const closeModalHandler = () => { 
        setShowModal(false)
    }

    


    return(
        <div className="card">
            {/* dynamic expression with {} */}
            <h2>{props.title}</h2>
            {/* this is js so className and not 'class' */}
            <div className="actions">
                {/* u wouldn't execute a function here ...so no deleteHandler() cuz u would want to execute the function when the button is clicked; not when the code is being evaluated which would cause the fxn to run before the component is rendered in the browser... hence just point to the function deleteHandler */}
                <button className="btn" onClick={deleteHandler}>Delete</button>
            </div>
            {/* you could pass onClick prop as well instead of closeModalHandler to maintain consistency as above */}
            {showModal && <Modal closeModalHandler={closeModalHandler} onConfirm={closeModalHandler}/> }
            {showModal && <Backdrop onClick={closeModalHandler}/>}
        </div>
    )
}

export default Todo
