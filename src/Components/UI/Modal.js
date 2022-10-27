import React from 'react'
import  ReactDOM from 'react-dom'
import classes from './Modal.module.css'

function Modal(props) {
    const BacKDropCmp = () => {
        return (
        <div className={classes.backdrop}/>
        );
    }

    const ModalCmp = (props) => {
        return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
        );
    }

    const backDropID = document.getElementById('backdrop');

  return (
    <React.Fragment>
        {ReactDOM.createPortal(<BacKDropCmp/>, backDropID)}
        {ReactDOM.createPortal(<ModalCmp>{props.children}</ModalCmp>, backDropID)}
    </React.Fragment>
  )
}

export default Modal