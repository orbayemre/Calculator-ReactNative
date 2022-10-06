import {Text,View} from "react-native";
import styles from "../styles";
import ButtonComp from "./button";
import {useState} from "react";

export default function CalcKeyboard(){

    const [firstNumber,setFirsNumber] = useState("");
    const [secondNumber,setSecondNumber] = useState("");
    const [operation,setOperation] = useState("");
    const [result,setResult] = useState(null);
    const [isThereResult,setIsThereResult] = useState(false);

    const handleNumberPress = (buttonValue:string) =>{
        if(firstNumber.length < 10)
            setFirsNumber(firstNumber+buttonValue);
    }
    const handleOperationPress = (buttonValue:string) =>{
        if(!isThereResult){
            setOperation(buttonValue);
            setSecondNumber(firstNumber);
            setFirsNumber("");
        }
        else{
            setOperation(buttonValue);
            setSecondNumber(result);
            setFirsNumber("");
            setResult(null);
        }
    }
    const handlePercentPress = () =>{
        setFirsNumber((parseFloat(firstNumber)/100).toString());
    }
    const clear = () =>{
            setFirsNumber("");
            setSecondNumber("");
            setOperation("");
            setResult(null);
            setIsThereResult(false);
    }

    const getResult = () =>{
            switch (operation) {
                case "+" :
                        setResult(parseFloat(secondNumber) + parseFloat(firstNumber));
                break;
                case "-" :
                        setResult(parseFloat(secondNumber) - parseFloat(firstNumber));
                break;
                case "×" :
                        setResult(parseFloat(secondNumber) * parseFloat(firstNumber));
                break;
                case "÷" :
                        setResult(parseFloat(secondNumber) / parseFloat(firstNumber));
                break;
                case "^" :
                    setResult( Math.pow(parseFloat(secondNumber),parseFloat(firstNumber)));
                    break;
                default :
                        setResult(0);
                break;
            }
            setIsThereResult(true);
    }

    return(
        <>
        <View style={styles.calcResult}>
            <View style={{flexDirection:"row"}}>
                <Text style={styles.resultSecondNumber}>{secondNumber}</Text>
                <Text style={styles.resultOperation}>{operation}</Text>
                <Text style={styles.resultFirstNumber}>{firstNumber}</Text>
            </View>
            {result !== null ?
                <Text
                    style={result.toString().length < 8 ? styles.resultResultValue :
                           result.toString().length < 20 ? styles.resultResultMiniValue : styles.resultResultSuperMiniValue}
                >
                    = {result.toString()}
                </Text>  : ""
            }
        </View>
        <View style={styles.calcKeyboard}>
            <ButtonComp value={"C"} onPress={()=>clear()}/>
            <ButtonComp value={"∧"}  onPress={()=> handleOperationPress("^")} isOperation/>
            <ButtonComp value={"%"} onPress={()=> handlePercentPress()} isOperation/>
            <ButtonComp value={"÷"} onPress={()=> handleOperationPress("÷")} isOperation/>
            <ButtonComp value={"9"} onPress={()=> handleNumberPress("9")} isNumber/>
            <ButtonComp value={"8"} onPress={()=> handleNumberPress("8")} isNumber/>
            <ButtonComp value={"7"} onPress={()=> handleNumberPress("7")} isNumber/>
            <ButtonComp value={"×"} onPress={()=> handleOperationPress("×")} isOperation/>
            <ButtonComp value={"6"} onPress={()=> handleNumberPress("6")} isNumber/>
            <ButtonComp value={"5"} onPress={()=> handleNumberPress("5")} isNumber/>
            <ButtonComp value={"4"} onPress={()=> handleNumberPress("4")} isNumber/>
            <ButtonComp value={"-"} onPress={()=> handleOperationPress("-")} isOperation/>
            <ButtonComp value={"3"} onPress={()=> handleNumberPress("3")} isNumber/>
            <ButtonComp value={"2"} onPress={()=> handleNumberPress("2")} isNumber/>
            <ButtonComp value={"1"} onPress={()=> handleNumberPress("1")} isNumber/>
            <ButtonComp value={"+"} onPress={()=> handleOperationPress("+")} isOperation/>
            <ButtonComp value={"."} onPress={()=> handleNumberPress(".")} isNumber/>
            <ButtonComp value={"0"} onPress={()=> handleNumberPress("0")} isNumber/>
            <ButtonComp value={"⌫"} onPress={()=> setFirsNumber(firstNumber.slice(0,-1))}/>
            <ButtonComp value={"="} onPress={()=> getResult()} isEqual/>
        </View>
        </>

    )
}
