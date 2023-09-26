import React from 'react';

function Register() {


  return (
    <div className='login-container'>
      <h2>Register</h2>
      <form >
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">phone Number</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Email</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="username">Password</label>
          <input
            type="text"
            id="username"
            name="username"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Register
        </button>
      </form>
    </div>
  );
}

export default Register;
