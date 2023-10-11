import React from "react";
import { Button, TextInput, View } from "react-native";
import { Formik } from "formik";

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
      {({ handleChange, handleSubmit, values }) => {
        return (
          <View>
            <TextInput
              placeholder="email"
              value={values.email}
              onChangeText={handleChange("email")}
            />
            <TextInput
              placeholder="password"
              value={values.password}
              onChangeText={handleChange("password")}
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
