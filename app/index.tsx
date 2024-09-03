import { useRouter, Link } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';

export default function Index() {
  const router = useRouter();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
      <Text onPress={() => router.navigate("(tabs)/home" as any)}>Go to tabs now</Text>
      <StatusBar style="dark" />
    </View>
  );
}
