import { useState } from 'react';
import FormFields from '../../components/FormFields/FormFields';
import Modal from '../../components/Modal/Modal';
import styles from './Form.module.css';

const Form = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const modalHandler = (e) => {
    setIsModalOpen((prevState) => !prevState);
  };
  return (
    <div>
      <h1 className={styles.heading}>Personal Details</h1>
      <FormFields modalHandler={setIsModalOpen} />
      {isModalOpen && (
        <Modal
          modalHeading="Form Submitted"
          modalText="Your details have been submitted, and profile has been submitted"
          modalHandler={modalHandler}
        />
      )}
    </div>
  );
};
export default Form;
