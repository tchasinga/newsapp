import { Stack } from "expo-router";
import { ClerkProvider, ClerkLoaded, SignedIn, SignedOut } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { tokenCache } from "@/lib/auth";

const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY!

if (!publishableKey) {
  throw new Error(
    'Missing Publishable Key. Please set EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY in your .env',
  )
}

export default function RootLayout() {
  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <ClerkLoaded>

        <SignedIn>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(tabs)' options={{ headerShown: false }} />
          </Stack>
        </SignedIn>

        <SignedOut>
          <Stack screenOptions={{ headerShown: false }}>
            <Stack.Screen name='(auth)' options={{ headerShown: false }} />
          </Stack>
        </SignedOut>

      </ClerkLoaded>
    </ClerkProvider>
  );
}
