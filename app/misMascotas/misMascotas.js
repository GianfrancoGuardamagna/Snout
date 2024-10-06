import { View, Button } from "react-native";
import ServiciosIndex from "../../src/components/lobbyButtons";
import { getMascotas } from "../../utils/data/db_manger";

export default function misMascotas() {
  handleConsultarMascota = () => {
    try {
      getMascotas((mascotas) => {
        console.log(mascotas);
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View className="flex-1 bg-gray-500 items-center justify-center">
      <ServiciosIndex service="Crear Mascota" link="./crearMascota" />
      <ServiciosIndex service="Volver" link="/" />
      <Button title="Consultar Mascota" onPress={handleConsultarMascota} />
    </View>
  );
}
