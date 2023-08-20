import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 5,
    paddingTop: 5,
  },
  conteiner_header: {
    flexDirection: "row",
    paddingRight: 10,
  },
  conteiner_subHeader: {
    flex: 1,
    paddingLeft: 8,
    paddingBottom: 5,
  },
  title: {
    color: "#021312",
    fontWeight: "bold",
    marginBottom: 5,
    fontSize: 20,
  },
  conteiner_Stats: {
    flexDirection: "row",
    justifyContent: "space-around",
  },
  text_style: {
    fontStyle: "italic",
    textAlign: "center",
  },
  lenguages: {
    padding: 4,
    backgroundColor: "#0992F1",
    color: "white",
    alignSelf: "flex-start",
    fontWeight: "600",
    borderRadius: 4,
    overflow: "hidden",
  },
  imagen: {
    width: 55,
    height: 55,
    borderRadius: 10,
  },
});
