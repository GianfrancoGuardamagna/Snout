import { Text, View, TextInput, Button } from "react-native";
import ServiciosIndex from "../../src/components/lobbyButtons.js";
import React, { useState, useEffect } from "react";
import { addMascota, createTable } from "../../utils/data/db_manger.js";
import { useRouter } from "expo-router";

export default function CrearMascota() {
  const router = useRouter();
  const [nombre, setNombre] = useState("");
  const [edad, setEdad] = useState("");
  const [raza, setRaza] = useState("");

  useEffect(() => {
    createTable();
  }, []);

  const handleInscribirMascota = () => {
    addMascota(nombre, edad, raza, (result) => {
      console.log("Mascota inscrita:", result);
    }).then((res) => {
      console.log(res);
    });
    // router.push("./misMascotas");
  };

  return (
    <View className="flex-1 bg-gray-500 items-center justify-around h-full">
      <Text className="text-2xl font-bold">Crear Mascota</Text>
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
      <Button title="Inscribir Mascota" onPress={handleInscribirMascota} />
      <ServiciosIndex service="Volver a mis mascotas" link="./misMascotas" />
    </View>
  );
}
