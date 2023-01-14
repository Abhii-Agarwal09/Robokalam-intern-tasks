import React, { useState } from 'react';
import styles from './formFields.module.css';
import axios from 'axios';

const FormFields = ({ modalHandler }) => {
  const [formState, setFormState] = useState({
    fname: '',
    mname: '',
    lname: '',
    email: '',
    address: '',
    phone: '',
    gender: '',
  });

  const inputChangeHandler = (e) => {
    // console.log(e.target);
    setFormState((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    console.log(formState);
    const res = await axios.post(
      'http://localhost:3001/api/users/new',
      formState
    );
    console.log(res);
    if (res.data.success === true) {
      modalHandler(true);
    }
    formResetHandler(e);
  };

  const formResetHandler = (e) => {
    e.preventDefault();
    setFormState({
      fname: '',
      mname: '',
      lname: '',
      email: '',
      address: '',
      phone: '',
      gender: '',
    });
  };

  return (
    <>
      <form className={styles.form} action="#" onSubmit={formSubmitHandler}>
        {/* Name inputs */}
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="fname">
            First Name:{' '}
          </label>
          <input
            className={styles.form_input}
            type="text"
            name="fname"
            id="fname"
            required
            onChange={inputChangeHandler}
            value={formState.fname}
          />
        </div>
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="mname">
            Middle Name:{' '}
          </label>
          <input
            className={styles.form_input}
            type="text"
            name="mname"
            id="mname"
            onChange={inputChangeHandler}
            value={formState.mname}
          />
        </div>
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="lname">
            Last Name:{' '}
          </label>
          <input
            className={styles.form_input}
            type="text"
            name="lname"
            id="lname"
            onChange={inputChangeHandler}
            required
            value={formState.lname}
          />
        </div>
        {/* Email */}
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="email">
            Email:{' '}
          </label>
          <input
            className={styles.form_input}
            type="email"
            name="email"
            id="email"
            onChange={inputChangeHandler}
            required
            value={formState.email}
          />
        </div>
        {/* Address */}
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="address">
            Address:{' '}
          </label>
          <input
            className={styles.form_input}
            type="text"
            name="address"
            id="address"
            onChange={inputChangeHandler}
            required
            value={formState.address}
          />
        </div>
        {/* Phone number */}
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="phone">
            Phone:{' '}
          </label>
          <input
            className={styles.form_input}
            type="number"
            name="phone"
            id="phone"
            onChange={inputChangeHandler}
            required
            value={formState.phone}
          />
        </div>
        {/* Gender */}
        <div className={styles.form_control}>
          <label className={styles.input_label} htmlFor="gender">
            Gender:{' '}
          </label>
          <div className={styles.gender_container}>
            <label htmlFor="male">
              Male{' '}
              <input
                className={styles.form_input}
                type="radio"
                name="gender"
                id="gender"
                value="Male"
                onChange={inputChangeHandler}
                required
                checked={formState.gender === 'Male'}
              />
            </label>
          </div>
          <div className={styles.gender_container}>
            <label htmlFor="female">
              Female{' '}
              <input
                className={styles.form_input}
                type="radio"
                name="gender"
                id="gender"
                value="Female"
                onChange={inputChangeHandler}
                checked={formState.gender === 'Female'}
                required
              />
            </label>
          </div>
          <div className={styles.gender_container}>
            <label htmlFor="other">
              Other{' '}
              <input
                className={styles.form_input}
                type="radio"
                name="gender"
                id="gender"
                value="Others"
                onChange={inputChangeHandler}
                checked={formState.gender === 'Others'}
                required
              />
            </label>
          </div>
        </div>
        <div className={styles.btn_container}>
          <button onClick={formResetHandler} className={styles.btn}>
            Reset
          </button>
          <button onClick={formSubmitHandler} className={styles.btn}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
};

export default FormFields;
