import { useField } from "formik";
import { TextInput } from "react-native";
import { StyleForm } from "../styles/Style_AppForm";

export const FormitInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <TextInput
      placeholder={name}
      style={StyleForm.input}
      value={field.value}
      onChangeText={(value) => helpers.setValue(value)}
    />
  );
};
