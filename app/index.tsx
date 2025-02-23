import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function App() {
  return (
    <View className="flex-1 justify-center items-center bg-gray-100">
      <TextInput className="w-80 h-12 border border-gray-300 rounded px-4 mb-4" placeholder="Correo" />
      <TextInput className="w-80 h-12 border border-gray-300 rounded px-4 mb-4" placeholder="Contraseña" secureTextEntry />
      <TouchableOpacity className="bg-blue-500 w-80 h-12 rounded flex items-center justify-center">
        <Text className="text-white font-bold">Iniciar Sesión</Text>
      </TouchableOpacity>
    </View>
  );
}
