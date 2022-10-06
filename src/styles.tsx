import {StyleSheet} from "react-native";

export const colors = {
    number: '#003865',
    operation: '#FB3640',
    default: '#2E2F38',
    equal: '#2192FF',
    result: '#548CA8',
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    calcKeyboard:{
        flex:1.5,
        flexDirection:"row",
        flexWrap:"wrap",
        backgroundColor:"#000",
        paddingHorizontal:14,
        paddingTop:14,
        marginTop:14,
    },
    calcResult:{
        flex:1,
        width:"100%",
        justifyContent: "flex-end",
        alignItems:"flex-end",
        paddingRight:30,
    },
    calcText:{
        fontSize:39,
        color:"gray",
    },
    numberBtn :{
        width:80,
        height:80,
        margin:5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:24,
        backgroundColor: colors.number,
    },
    operationBtn :{
        width:80,
        height:80,
        margin:5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:24,
        backgroundColor: colors.operation,
    },
    equalBtn :{
        width:80,
        height:80,
        margin:5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:24,
        backgroundColor: colors.equal,
    },
    defaultBtn:{
        width:80,
        height:80,
        margin:5,
        justifyContent: "center",
        alignItems: "center",
        borderRadius:24,
        backgroundColor: colors.default,
    },
    textBtn:{
        fontSize:36,
        color:"white",
    },
    resultFirstNumber:{
        fontSize:48,
        color:colors.number,
        fontWeight:"900",
        justifyContent:"center",
        alignItems:"center",
    },
    resultSecondNumber:{
        fontSize:48,
        color:colors.number,
        fontWeight:"900",
        justifyContent:"center",
        alignItems:"center",
    },
    resultOperation:{
        fontSize:48,
        color:colors.operation,
        fontWeight:"500",
        justifyContent:"center",
        alignItems:"center",
        marginHorizontal:8,
    },
    resultResultValue:{
        fontSize:48,
        color:colors.result,
        fontWeight:"900",
        justifyContent:"center",
        alignItems:"flex-end",
        paddingHorizontal:8,
    },
    resultResultMiniValue:{
        fontSize:32,
        color:colors.result,
        fontWeight:"900",
        justifyContent:"center",
        alignItems:"flex-end",
        paddingHorizontal:8,
    },
    resultResultSuperMiniValue:{
        fontSize:20,
        color:colors.result,
        fontWeight:"900",
        justifyContent:"center",
        alignItems:"flex-end",
        paddingHorizontal:8,
    }
});

export default styles;