import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";

export default function InfoPet({ id, nombre, edad, raza }) {
  const router = useRouter();

  const handlePressPet = () => {
    router.push({
      pathname: "./editMascota",
      params: { nombre: nombre, edad: edad, raza: raza, id: id },
    });
  };

  return (
    <Pressable className="bg-violet-500" onPress={handlePressPet}>
      <Text className="text-center">Mascota n°{id}</Text>
      <Text className="text-center">{nombre}</Text>
      <Text className="text-center">{edad}</Text>
      <Text className="text-center">{raza}</Text>
    </Pressable>
  );
}
