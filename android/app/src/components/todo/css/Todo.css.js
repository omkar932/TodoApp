const { StyleSheet } = require("react-native");
const colors = { primary: "#1f145c", white: "#fff" }
const todoStyles = StyleSheet.create({
    actionIcons: {
        height: 25,
        width: 25,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignContent: 'center',
        marginLeft: 5,
        borderRadius: 3
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    footer: {
        position: 'absolute',
        bottom: 0,
        color: colors.white,
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    inputContainer: {
        backgroundColor: colors.white,
        color: 'black',
        elevation: 40,
        flex: 1,
        height: 50,
        marginVertical: 20,
        marginRight: 20,
        borderRadius: 30,
        paddingHorizontal: 20,
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
    newsButton: {
        height: 40,
        width: 60,
        backgroundColor: colors.primary,
        borderRadius: 15,
        elevation: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    arrow: {
        width: 0,
        height: 0,
        backgroundColor: "transparent",
        borderStyle: "solid",
        borderTopWidth: 10,
        borderBottomWidth: 10,
        borderLeftWidth: 18,
        borderTopColor: "transparent",
        borderBottomColor: "transparent",
        borderLeftColor: "#fff",
        marginLeft: 5,
    },
    listItems: {
        padding: 20,
        backgroundColor: colors.white,
        flexDirection: 'row',
        elevation: 12,
        borderRadius: 7,
        marginVertical: 10,
    }

})

export default todoStyles;