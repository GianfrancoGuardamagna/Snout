import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import ServiciosIndex from "../src/components/lobbyButtons.js";

export default function App() {
  return (
    <View className="flex-1 bg-gray-500 items-center justify-center">
      <StatusBar style="auto" />
      <ServiciosIndex
        service="Recordatorios"
        link="./recordatorios/recordatorios"
      />
      <ServiciosIndex service="Mis Mascotas" link="./misMascotas/misMascotas" />
      <ServiciosIndex service="Crear QR" link="./crearQr/crearQr" />
    </View>
  );
}
