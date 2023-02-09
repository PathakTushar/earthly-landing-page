import React from "react";
import classes from "./ProductModal.module.css";
import { Fragment } from "react";
import { createPortal } from "react-dom";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onClose} />;
};
const ModalOverlay = (props) => {
  return (
    <div className={classes.modal}>
      <div className={classes.content}>{props.children}</div>
    </div>
  );
};
const portalElement = document.getElementById("overlays");
const CartModal = (props) => {
  return (
    <Fragment>
      {createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {createPortal(
        <ModalOverlay>{props.children}</ModalOverlay>,
        portalElement
      )}
    </Fragment>
  );
};

export default CartModal;

/*
      <div className={classes.cartModalContainer}>
      <div className={classes.modalImage}>
        <img src='https://static.wixstatic.com/media/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.jpg/v1/fill/w_489,h_733,al_c,q_85,usm_0.66_1.00_0.01/ead566_9cbaa34eb7e94b8e8ebba3580880d70d~mv2.webp' alt='productImage'/>
      </div>
      <div className={classes.modalContent}>
        <h1>
          Reusable Bamboo Straws
        </h1>
      </div>
    </div>
*/
