import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
  },
  skipButton: {
    backgroundColor: "transparent",
  },
  skip: {
    alignItems: "center",
    fontSize: 18,
  },
  imageContainer: {
    width: "100%",
    aspectRatio: 1,
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
    justifyContent: "flex-end",
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
  },
  pagination: {
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#fff",
  },
});
