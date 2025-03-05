import { View, Text, TextInput, TouchableOpacity, Image, Alert, ActivityIndicator, Dimensions } from "react-native";
import { useRouter } from 'expo-router';
import { useState } from "react";
import TwitterIcon from "../assets/icons/iconoTwitter.svg";
import FacebookIcon from "../assets/icons/iconoFacebook.svg";
import GoogleIcon from "../assets/icons/iconoGoogle.svg";

const { width } = Dimensions.get("window");

export default function App() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit() {
    if (!email || !password) {
      Alert.alert("Error", "Por favor, ingresa tu email y contraseña.");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch("http://192.168.1.39:3000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      setLoading(false);

      if (data.success) {
        console.log("Token:", data.token); // Aquí podrías guardar el token en AsyncStorage o en el estado global
        router.push('./login');
      } else {
        Alert.alert("Error", "Email o contraseña incorrectos.");
      }
    } catch (error) {
      setLoading(false);
      Alert.alert("Error", "No se pudo conectar con el servidor.");
      console.error(error);
    }
  }

  return (
    <View className="flex-1 justify-center items-center bg-gray-100 p-6 gap-8">
      <View>
      <Image
        className="h-32 w-32 mb-5"
        source={require("../assets/images/snout_reduction.webp")}
        style={{ width: width * 0.3, height: width * 0.3 }}
      />
      </View>
      <View className="style={{ width: width * 0.8 }} items-end">
        <TextInput className="h-12 bg-[#BBBABB] rounded-xl px-4 mb-4" style={{ width: width * 0.8 }} placeholder="Correo Electrónico" id="correo" value={email} onChangeText={setEmail} />
        <TextInput className="h-12 bg-[#BBBABB] rounded-xl px-4 mb-4" style={{ width: width * 0.8 }} placeholder="Contraseña" id="contraseña"  value={password} onChangeText={setPassword} secureTextEntry />
        <Text className="text-[#662483]">Olvidé mi contraseña</Text>
      </View>
      <TouchableOpacity className="bg-[#662483] h-10 rounded-lg flex items-center justify-center mt-3" style={{ width: width * 0.8 }} onPress={onSubmit}>
        <Text className="text-white font-bold">Iniciar Sesión</Text>
      </TouchableOpacity>
      <View className="style={{ width: width * 0.8 }} items-center gap-3">
        <Text className="text-xl">O ingresa con</Text>
        <View className="flex-row gap-5">
        <TwitterIcon width={width * 0.1} height={width * 0.1} />
        <FacebookIcon width={width * 0.1} height={width * 0.1} />
        <GoogleIcon width={width * 0.1} height={width * 0.1} />
        </View>
      </View>
      <View className="style={{ width: width * 0.8 }} items-center gap-3">
        <Text className="text-xl">¿No tienes cuenta?</Text>
        <Text className="text-xl text-[#662483]">REGISTRARME</Text>
      </View>
    </View>
  );
}
