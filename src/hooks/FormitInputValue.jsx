import { useField } from "formik";
import { TextInput } from "react-native";
import { StyleForm } from "../styles/Style_AppForm";

const FormitInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  if (name === "password") {
    return (
      <TextInput
        placeholder={name}
        style={StyleForm.input}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        secureTextEntry
      />
    );
  } else {
    return (
      <TextInput
        placeholder={name}
        style={StyleForm.input}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
      />
    );
  }
};
export default FormitInputValue;
