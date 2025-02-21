import React from "react";

const Form = () => (
  <form className="container mt-3">
    <div className="form-group">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter your name"
      />
    </div>

    <div className="form-group">
      <label htmlFor="email">Email</label>
      <input
        type="email"
        className="form-control"
        id="email"
        placeholder="Enter your email"
      />
    </div>

    <div className="form-group">
      <label htmlFor="message">Message</label>
      <textarea
        className="form-control"
        id="message"
        rows="4"
        placeholder="Enter your message"
      ></textarea>
    </div>

    <button type="submit" className="btn btn-primary">
      Submit
    </button>
  </form>
);

export default Form;
