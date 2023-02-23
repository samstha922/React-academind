const Modal = (props)=>{
    const confirmHandler=()=>{
        console.log('confirm handler ')
        props.onConfirm();
    }

    return (
        <div className="modal">
            <p>Are you sure?</p>
            <button className="btn btn--alt" onClick={props.closeModalHandler}>Cancel</button>
            <button className="btn" onClick={confirmHandler}>Confirm</button>
        </div>
    )
}

export default Modal