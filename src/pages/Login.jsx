import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import FormitInputValue from "../hooks/FormitInputValue";
import { loginValidationSchena } from "../validation/login.js";

const initialValue = {
  email: "",
  password: "",
};

const Login = () => {
  return (
    <Formik
      validationSchema={loginValidationSchena}
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
