import React from 'react';
import { ClerkProvider, useAuth } from '@clerk/clerk-expo';
import { tokenCache } from '@clerk/clerk-expo/token-cache';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import WelcomeScreen from '../screens/WelcomeScreen';

const Stack = createNativeStackNavigator();

function RootNavigation() {
  const { isSignedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isSignedIn ? (
        <Stack.Screen name="Home" component={HomeScreen} />
      ) : (
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
      )}
    </Stack.Navigator>
  );
}

export default function AppNavigation() {
  return (
    <ClerkProvider
      tokenCache={tokenCache}
      publishableKey="pk_test_Y2FsbS1ob25leWJlZS04NS5jbGVyay5hY2NvdW50cy5kZXYk"
    >
      <NavigationContainer>
        <RootNavigation />
      </NavigationContainer>
    </ClerkProvider>
  );
}
