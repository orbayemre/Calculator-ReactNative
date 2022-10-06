import { StatusBar } from 'expo-status-bar';
import {View} from 'react-native';
import styles from "./src/styles";
import CalcKeyboard from "./src/components/calcKeyboard";

export default function App() {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <CalcKeyboard/>
    </View>
  );
}

