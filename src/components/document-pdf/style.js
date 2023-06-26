import { StyleSheet } from "@react-pdf/renderer"

const style = StyleSheet.create({
    page: {
        margin: 30
    },
    title: {
        marginBottom: 16,
        fontSize: 24,
        fontWeight: 'bold'
    },
    text: {
        marginVertical: 8
    },
    workdays: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginVertical: 32,
        width: 841.89 - 60,
        borderRightWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    workday: {
        flex: 1,
        padding: 5,
        textAlign: 'center',
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderLeftWidth: 1,
        borderStyle: 'solid',
        borderColor: '#000'
    },
    day: {
        fontSize: 10
    }
})

export default style
