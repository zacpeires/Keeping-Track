import React, { Component } from 'react';



const LoginForm = (props) => {

    return (
      <form
        autoComplete="off"
        onSubmit={props.handleSubmit}
        className="login-form__form"
      >
      <label>
        <input
          className="login-form__input"
          name="email"
          type="text"
          value={props.email}
          onChange={props.handleChange}
          placeholder="Email address"
        />
        </label>
        <label>
        <input
          className="login-form__input"
          name="password"
          type="password"
          value={props.password}
          onChange={props.handleChange}
          placeholder="Password"
        />
        </label>
        <button type="submit" className="login-form__button">
          Log in
        </button>
      </form>
    );
  }

export default LoginForm
