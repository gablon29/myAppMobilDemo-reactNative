import { useField } from "formik";
import { TextInput, Text } from "react-native";
import { StyleForm } from "../styles/Style_AppForm";

const FormitInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <TextInput
        style={StyleForm.input}
        value={field.value}
        onChangeText={(value) => helpers.setValue(value)}
        {...props}
      />
      {meta.error && <Text style={StyleForm.error}>{meta.error}</Text>}
    </>
  );
};
export default FormitInputValue;
