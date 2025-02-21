import React, { useState } from "react";
import Card from "./Card";
import Form from "./Form";
import Button from "./Button";
import Modal from "./Modal";

const Home = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpen = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  return (
    <div className="container mt-5">
      <div className="jumbotron text-center">
        <h1 className="display-4">Welcome to the Home Page</h1>
        <p className="lead">
          This is a simple home page built using React and Bootstrap.
        </p>
        <hr className="my-4" />
        <p>Explore and enjoy your stay!</p>
      </div>

      <div className="card-container">
        <Card />
      </div>

      <div className="form-container mt-5">
        <h2>Contact Us</h2>
        <Form />
      </div>

      {/* Buttons with different variants */}
      <div className="text-center mt-4">
        <Button variant="primary" text="Primary Button" />
        <Button variant="secondary" text="Secondary Button" />
        <Button variant="success" text="Success Button" />
        <Button variant="danger" text="Danger Button" />
        <Button variant="warning" text="Warning Button" />
        <Button variant="info" text="Info Button" />
      </div>

      {/* Trigger Modal Button */}
      <div className="text-center mt-5">
        <Button variant="primary" text="Open Modal" onClick={handleOpen} />
      </div>

      {/* Modal Component */}
      <Modal show={showModal} handleClose={handleClose} />
    </div>
  );
};

export default Home;
