import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import FormitInputValue from "../hooks/FormitInputValue";

const initialValue = {
  email: "",
  password: "",
};

const validate = (value) => {
  const error = {};
  if (!value.email) {
    error.email = "Email is required";
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value.email
    )
  ) {
    error.email = "Writte valid email";
  }
  console.log(error);
  return error;
};

const Login = () => {
  return (
    <Formik
      validate={validate}
      initialValues={initialValue}
      onSubmit={(value) => console.log(value)}
    >
      {/* Aqui pasamos una funcion que al ejecutarse devuelve lo que tiene
    que renderizar */}
      {({ handleSubmit }) => {
        return (
          <View>
            <FormitInputValue name="email" placeholder="email" />
            <FormitInputValue
              name="password"
              placeholder="password"
              secureTextEntry
            />
            <Button onPress={handleSubmit} title="Login">
              Login
            </Button>
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
