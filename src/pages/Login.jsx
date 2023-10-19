import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";
import FormitInputValue from "../hooks/FormitInputValue";

const initialValue = {
  email: "",
  password: "",
};
const Login = () => {
  return (
    <Formik
      initialValues={initialValue}
      onSubmit={(value) => console.log(value)}
    >
      {/* Aqui pasamos una funcion que al ejecutarse devuelve lo que tiene
    que renderizar */}
      {({ handleSubmit }) => {
        return (
          <View>
            <FormitInputValue name="email" />
            <FormitInputValue name="password" />
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
