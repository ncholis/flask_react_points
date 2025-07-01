import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [show, setShow] = useState(false);
  const [serverResponse, setServerResponse] = useState("");

  const submitForm = async (data) => {
    if (data.password === data.confirmPassword) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      };

      try {
        const response = await fetch("/auth/signup", requestOptions);
        const result = await response.json();
        setServerResponse(result.message);
        setShow(true);
        reset();
      } catch (error) {
        console.error(error);
      }
    } else {
      alert("Passwords do not match");
    }
  };

  return (
    <div className="container">
      <div className="form">
        {show && (
          <Alert
            variant="success"
            onClose={() => setShow(false)}
            dismissible
          >
            <p>{serverResponse}</p>
          </Alert>
        )}
        <h1>Sign Up Page</h1>
        <Form onSubmit={handleSubmit(submitForm)}>
          {['username', 'email', 'password', 'confirmPassword'].map((field) => (
            <Form.Group key={field} className='m-2'>
              <Form.Label>{field.charAt(0).toUpperCase() + field.slice(1)}</Form.Label>
              <Form.Control
                type={field.includes("password") | field.includes("confirmPassword") ? "password" : field}
                placeholder={`Your ${field}`}
                {...register(field, { required: true, minLength: field.includes("password") ? 8 : undefined })}
              />
              {errors[field] && (
                <p style={{ color: "red" }}>
                  <small>{field.charAt(0).toUpperCase() + field.slice(1)} is required</small>
                </p>
              )}
              {errors[field]?.type === "minLength" && (
                <p style={{ color: "red" }}>
                  <small>Min characters should be 8</small>
                </p>
              )}
            </Form.Group>
          ))}
          <Form.Group>
            <Button type="submit" variant="primary">
              Sign Up
            </Button>
          </Form.Group>
          <Form.Group>
            <small>
              Already have an account? <Link to="/login">Log In</Link>
            </small>
          </Form.Group>
        </Form>
      </div>
    </div>
  );
};

export default SignUpPage;