import {Text, TouchableOpacity} from "react-native";
import styles from "../styles";

interface buttonProps{
    onPress: () => void;
    value:string;
    isNumber?:boolean;
    isOperation?:boolean;
    isEqual?:boolean;
}


export default function ButtonComp({onPress,value,isNumber,isOperation,isEqual}:buttonProps){
    return (
        <TouchableOpacity

            activeOpacity={0.6}
            style={
                isNumber ? styles.numberBtn :
                isOperation ? styles.operationBtn :
                isEqual ? styles.equalBtn :
                styles.defaultBtn
            }
            onPress={onPress}
        >
            <Text style={styles.textBtn}>{value}</Text>
        </TouchableOpacity>
    )

}