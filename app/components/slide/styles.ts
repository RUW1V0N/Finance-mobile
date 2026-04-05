import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  imageContainer: {
    flex: 1.5,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    justifyContent: "center",
    gap: 20,
  },
  title: {
    fontSize: 35,
    fontWeight: "700",
    lineHeight: 40,
    textAlign: "center",
    color: "#3e7bfe",
  },
  subtitle: {
    fontSize: 20,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 25,
  }
});
