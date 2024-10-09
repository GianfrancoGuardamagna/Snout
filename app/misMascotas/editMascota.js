import { View, Text, TextInput, Button } from "react-native";
import ServiciosIndex from "../../src/components/lobbyButtons.js";
import { useLocalSearchParams, useRouter } from "expo-router";
import { updMascota, delMascota } from "../../utils/data/db_manger";
import { useState } from "react";

export default function EditMascota() {
  const router = useRouter();
  const mascotaInfo = useLocalSearchParams();

  const [nombre, setNombre] = useState(mascotaInfo.nombre);
  const [edad, setEdad] = useState(mascotaInfo.edad);
  const [raza, setRaza] = useState(mascotaInfo.raza);
  const idMascota = mascotaInfo.id;

  handleEditarMascota = () => {
    updMascota(idMascota, nombre, edad, raza);
    router.push("./misMascotas");
  };

  handleEliminarMascota = () => {
    delMascota(mascotaInfo.id);
    router.push("./misMascotas");
  };

  return (
    <View className="flex-1 bg-gray-500 items-center justify-around h-full">
      <Text className="text-2xl font-bold">Editar Mascota</Text>
      <TextInput
        placeholder="Nombre de la mascota"
        value={nombre}
        onChangeText={setNombre}
        className="border p-2 m-2 w-3/4 bg-gray-300"
      />
      <TextInput
        placeholder="Edad de la mascota"
        value={edad}
        onChangeText={setEdad}
        className="border p-2 m-2 w-3/4 bg-gray-300"
      />
      <TextInput
        placeholder="Raza de la mascota"
        value={raza}
        onChangeText={setRaza}
        className="border p-2 m-2 w-3/4 bg-gray-300"
      />
      <Button title="Editar Mascota" onPress={handleEditarMascota} />
      <Button title="Eliminar Mascota" onPress={handleEliminarMascota} />
      <ServiciosIndex service="Volver a mis mascotas" link="./misMascotas" />
    </View>
  );
}
