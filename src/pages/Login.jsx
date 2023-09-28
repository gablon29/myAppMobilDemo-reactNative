import React from "react";
import { Text, TextInput, View } from "react-native";
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
      {() => {
        return (
          <View>
            <TextInput />
            <TextInput />
          </View>
        );
      }}
    </Formik>
  );
};

export default Login;
