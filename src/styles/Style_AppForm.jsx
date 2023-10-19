import { StyleSheet } from "react-native";

export const StyleForm = StyleSheet.create({
  input: {
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 10,
    paddingVertical: 8,
    textAlign: "center",
    margin: 10,
  },
  error: {
    color: "red",
    backgroundColor: "#E99D92",
    textAlign: "center",
    marginHorizontal: 100,
    fontWeight: "bold",
    borderRadius: 50,
  },
  errorInput: {
    borderColor: "red",
  },
});
