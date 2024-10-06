import { useState } from "react";
import { Pressable, Text } from "react-native";
import { useRouter } from "expo-router";

export default function ServiciosIndex({ service, link }) {
  const [pressed, setPressed] = useState(false);
  const router = useRouter();

  return (
    <Pressable
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      onPress={() => router.push(link)}
      className={`flex items-start justify-start w-5/6 bg-white mb-6 border border-white rounded-xl p-8 ${
        pressed ? "bg-gray-300" : "bg-white"
      }`}
    >
      <Text>{service}</Text>
    </Pressable>
  );
}
