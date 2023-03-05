const { StyleSheet } = require("react-native");
const colors = { primary: "#1f145c", white: "#fff" }
const splashStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#272627',
    },
    image: {
      width: 400,
      height: 400,
    },
  });

  export default splashStyles;