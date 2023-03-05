const { StyleSheet } = require("react-native");
const colors = { primary: "#1f145c", white: "#fff" }
const HomeStyle = StyleSheet.create({
    iconContainer: {
        height: 50,
        width: 200,
        backgroundColor: colors.primary,
        borderRadius: 25,
        elevation: 70,
        justifyContent: 'center',
        alignItems: 'center',
    },
})

export default HomeStyle;