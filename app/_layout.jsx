import { ClerkProvider, ClerkLoaded , SignedIn, SignedOut} from '@clerk/clerk-expo'
import { Stack } from "expo-router";
import { Text } from 'react-native';


export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
      <ClerkLoaded>
       <SignedIn>
       <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        </Stack>
       </SignedIn>
       <SignedOut>
           <Text>Singout</Text>
        </SignedOut>
        </ClerkLoaded>
    </ClerkProvider>
  )
}