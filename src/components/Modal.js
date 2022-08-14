import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from '../styles/styles.css';

const Modal = ({setCheck, setUserInfo, setOpen }) => {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    setCheck(true)
    setUserInfo({
      name: data.name,
      phone: data.phone,
      email: data.email,
      hobbies: data.hobbies
    })

    reset()
  }

  console.log(errors);

  return (
    <>
      <div className="modalContainer">
        <form className="formContainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="top">
            <h1>Add</h1>
            <button className="closeBtn" onClick={() => setOpen(false)}>
              -
            </button>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              padding: '0 2rem',
              marginTop: '3rem',
            }}
          >
            <div className="inputBox">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                {...register('name', {
                  required: {
                    value: true,
                    message: 'Name is required!',
                  },
                })}
              />
              {errors?.name?.type === 'required' && (
                <span style={{ color: 'red' }}>{errors.name.message}</span>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="phone">Phone</label>
              <input
                type="tel"
                {...register('phone', {
                  required: {
                    value: true,
                    message: 'Phone is required!',
                  },
                })}
              />
              {errors?.phone?.type === 'required' && (
                <span style={{ color: 'red' }}>{errors.phone.message}</span>
              )}
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              gap: '10px',
              padding: '0 2rem',
              marginTop: '2rem',
            }}
          >
            <div className="inputBox">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: {
                    value: true,
                    message: 'Email is required!',
                  },
                })}
              />
              {errors?.email?.type === 'required' && (
                <span style={{ color: 'red' }}>{errors.email.message}</span>
              )}
            </div>

            <div className="inputBox">
              <label htmlFor="hobbies">Hobbies</label>
              <input
                type="text"
                {...register('hobbies', {
                  required: {
                    value: true,
                    message: 'Hobbies is required!',
                  },
                })}
              />
              {errors?.hobbies?.type === 'required' && (
                <span style={{ color: 'red' }}>{errors.hobbies.message}</span>
              )}
            </div>
          </div>
          <input className="submitBtn" type="submit" />
        </form>
      </div>
    </>
  );
};

export default Modal;
