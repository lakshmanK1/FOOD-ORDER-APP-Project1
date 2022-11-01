import React,{Fragment} from 'react'
import  ReactDOM from 'react-dom'
import classes from './Modal.module.css'

const BacKDropCmp = (props) => {
    return (
    <div className={classes.backdrop} onClick={props.onHideCart}/>
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

function Modal(props) {

  return (
    <Fragment>
        {ReactDOM.createPortal(<BacKDropCmp onHideCart={props.onHideCart}/>, backDropID)}
        {ReactDOM.createPortal(<ModalCmp>{props.children}</ModalCmp>, backDropID)}
    </Fragment>
  )
}

export default Modal