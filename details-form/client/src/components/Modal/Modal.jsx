import React from 'react';
import styles from './modal.module.css';

const Modal = ({ modalHeading, modalText, modalHandler }) => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.modal}>
          <h3 className={styles.modal_heading}>{modalHeading}</h3>
          <p className={styles.modal_text}>{modalText}</p>
          <button className={styles.btn} onClick={modalHandler}>Close</button>
        </div>
      </div>
    </>
  );
};

export default Modal;
