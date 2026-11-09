import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import Accelerometro from "./Accelerometer";

import { useNavigation } from "@react-navigation/native";

import type { NativeStackNavigationProp } from "@react-navigation/native-stack";
import type{ RootStackParamList } from "../Types/RootStackParamList";
type NavigationProp = NativeStackNavigationProp<RootStackParamList>;

export default function Home() {
  const navigation = useNavigation<NavigationProp>();

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Home</Text>
      <View style={styles.botaoContainer}>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          <Text>Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Gps")}>
          <Text>GPS</Text>
        </TouchableOpacity>
        <Accelerometro />
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
  },
  botaoContainer: {
    marginTop: 20,
    gap: 10,
  },  
});
