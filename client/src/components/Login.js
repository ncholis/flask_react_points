import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { login } from "../auth";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginUser = async (data) => {
    try {
      const response = await fetch("/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      if (result) {
        login(result.access_token);
        navigate("/");
      } else {
        alert("Invalid username or password");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const formFields = [
    {
      label: "Username",
      type: "text",
      name: "username",
      rules: {
        required: "Username dibutuhkan harus di isi",
        maxLength: { value: 25, message: "Username maksimal 25 karakter kata" },
      },
    },
    {
      label: "Password",
      type: "password",
      name: "password",
      rules: {
        required: "Password di butuhkan harus di isi",
        minLength: {
          value: 8,
          message: "Password minimal karakter 8 lebih baik",
        },
      },
    },
  ];

  return (
    <Form onSubmit={handleSubmit(loginUser)} className="container">
      <h1>Login Page</h1>

      {formFields.map((field, index) => (
        <Form.Group controlId={field.name} key={index} className="m-2">
          <Form.Label>{field.label}</Form.Label>
          <Form.Control
            type={field.type}
            placeholder={`Your ${field.label.toLowerCase()}`}
            {...register(field.name, field.rules)}
          />
          {errors[field.name] && (
            <Form.Text className="text-danger">
              {errors[field.name].message}
            </Form.Text>
          )}
        </Form.Group>
      ))}

      <Button variant="primary" type="submit">
        Login
      </Button>

      <Form.Group>
        <small>
          Do not have an account? <Link to="/signup">Create One</Link>
        </small>
      </Form.Group>
    </Form>
  );
};

export default LoginPage;
