import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function QR() {
  return (
    <View>
      <Text>Estoy en Recordatorios</Text>
      <Link href="/">
        <Text className="text-blue-500 mt-4 text-center">Volver al index</Text>
      </Link>
    </View>
  );
}
