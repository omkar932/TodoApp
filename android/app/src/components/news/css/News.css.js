const { StyleSheet } = require("react-native");
const colors = { primary: "#1f145c", white: "#fff" }
const newsStyles = StyleSheet.create({
    container: {
      width: '90%',
      alignSelf: 'center',
    },
    image: {
      height: 200,
      width: '100%',
    },
    title: {
      fontSize: 18,
      fontWeight: '600',
      marginTop: 10,
      color:'#000'
    },
    description: {
      fontSize: 16,
      fontWeight: '400',
      marginTop: 10,
      color:'#000'
    },
    data: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 10,
    },
    authorHeading: {
      color:'#000'
    },
    author: {
      fontWeight: 'bold',
      fontSize: 15,
      color:'#000'
    },
    date: {
      fontWeight: 'bold',
      color: '#e63946',
      fontSize: 15,
      color:'#000'
    },
    source: {
      color: '#e63946',
      fontWeight: 'bold'
    },
    iconContainer: {
      height: 50,
      width: 50,
      backgroundColor: colors.primary,
      borderRadius: 25,
      elevation: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    backContainer: {
      height: 30,
      width: 70,
      backgroundColor: '#3f3670',
      borderRadius: 5,
      marginLeft:2,
      elevation: 40,
      justifyContent: 'center',
      alignItems: 'center',
    },
    arrow: {
      width: 0,
      height: 0,
      backgroundColor: "transparent",
      borderStyle: "solid",
      borderLeftWidth: 10,
      borderRightWidth: 10,
      borderBottomWidth: 18,
      borderRightColor: "transparent",
      borderLeftColor: "transparent",
      borderBottomColor: "#fff",
      marginBottom: 5,
    },
    backArrow: {
      backgroundColor: "transparent",
      marginRight: 5,
    },
  });

  export default newsStyles;