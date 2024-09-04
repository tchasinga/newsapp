import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded } from '@clerk/clerk-expo'

export default function RootLayout() {

  const mainLinks = "pk_test_cmVhZHktdG9tY2F0LTMuY2xlcmsuYWNjb3VudHMuZGV2JA"

  return (
    <ClerkProvider
      publishableKey={mainLinks}
    >
      <ClerkLoaded>
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
      </ClerkLoaded>
    </ClerkProvider>
  );
}
