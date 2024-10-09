import { View, Text } from "react-native";
import ServiciosIndex from "../../src/components/lobbyButtons";
import { getMascotas } from "../../utils/data/db_manger";
import InfoPet from "../../src/components/infoPet";
import { useEffect, useState } from "react";

export default function MisMascotas() {
  const [mascotas, setMascotas] = useState([]);

  useEffect(() => {
    getMascotas().then((res) => {
      setMascotas(res);
    });
  }, []);

  return (
    <View className="flex-1 bg-gray-500 items-center justify-center gap-4">
      <View className="text-3xl">
        <Text>Mis Mascotas</Text>
      </View>
      <View className="w-3/4 justify-around flex-1">
        {mascotas.map((mascota) => (
          <InfoPet
            key={mascota.id}
            id={mascota.id}
            nombre={mascota.nombre}
            edad={mascota.edad}
            raza={mascota.raza}
          />
        ))}
      </View>
      <ServiciosIndex service="Crear Mascota" link="./crearMascota" />
      <ServiciosIndex service="Volver" link="/" />
    </View>
  );
}
