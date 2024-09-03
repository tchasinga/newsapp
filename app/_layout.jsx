import { Stack } from "expo-router";
import { ClerkLoaded, ClerkProvider, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
// import { tokenCache } from "@/lib/auth";
import { Text, View } from "react-native";


export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
       <ClerkLoaded>
        <SignedIn>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          </Stack>
        </SignedIn>

        <SignedOut>
          <View>
          <Text>Sing out</Text>
          </View>
        </SignedOut>
        </ClerkLoaded>
    </ClerkProvider>
  );
}
