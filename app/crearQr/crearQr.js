import { View, Text, TextInput, Button, ScrollView } from "react-native";
import { useState } from "react";
import QRCode from "react-native-qrcode-svg";
import ServiciosIndex from "../../src/components/lobbyButtons";

export default function QR() {
  const [nombre, setNombre] = useState("");
  const [domicilio, setDomicilio] = useState("");
  const [telefono, setTelefono] = useState("");
  const [nombreMascota, setNombreMascota] = useState("");
  const [notas, setNotas] = useState("");
  const [qrData, setQrData] = useState("");

  const handleSubmit = () => {
    let data = {
      nombre: nombre,
      domicilio: domicilio,
      telefono: telefono,
      nombreMascota: nombreMascota,
      notas: notas,
    };
    console.log(data);
    setQrData(JSON.stringify(data));
  };

  return (
    <ScrollView contentContainerStyle="flex-1 p-4 px-14 bg-gray-100 h-full">
      <View className="flex-1 bg-gray-500 items-center justify-around">
        <Text className="text-2xl font-bold">Crear Mascota</Text>
        <TextInput
          placeholder="Nombre del dueño"
          value={nombre}
          onChangeText={setNombre}
          className="border p-2 m-2 w-3/4 bg-gray-300"
        />
        <TextInput
          placeholder="Domicilio"
          value={domicilio}
          onChangeText={setDomicilio}
          className="border p-2 m-2 w-3/4 bg-gray-300"
        />
        <TextInput
          placeholder="Telefono"
          value={telefono}
          onChangeText={setTelefono}
          className="border p-2 m-2 w-3/4 bg-gray-300"
        />
        <TextInput
          placeholder="Nombre de la mascota"
          value={nombreMascota}
          onChangeText={setNombreMascota}
          className="border p-2 m-2 w-3/4 bg-gray-300"
        />
        <TextInput
          placeholder="Notas"
          value={notas}
          onChangeText={setNotas}
          className="border p-2 m-2 w-3/4 bg-gray-300"
        />
        <Button title="Generar QR" onPress={handleSubmit} color="#007bff" />
        {qrData && (
          <View className="mt-32 items-center">
            <QRCode value={qrData} size={200} />
          </View>
        )}
        <ServiciosIndex service="inicio" link="/" />
      </View>
    </ScrollView>
  );
}
