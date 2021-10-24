import { StyleSheet } from "react-native";
import theme from "../styles/theme.style.js";

// Common styles across the application
export const commonStyles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    flex: 1,
    width: "fit-content",
    textAlign: "center",
    fontFamily: theme.FONT_FAMILY_HEAD,
    color: theme.FONT_COLOR,
    fontSize: 18,
    fontWeight: "bold",
  },
  topBarContainer: { position: "fixed", width: "100vw" },
  topBar: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 20,
    backgroundColor: "#FFFF",
    zIndex: 10,
  },
});
