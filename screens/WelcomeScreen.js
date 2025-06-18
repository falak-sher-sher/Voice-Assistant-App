import { View, Text, Image, Pressable } from 'react-native';
import React, { useCallback, useEffect } from 'react';
import Colors from '../constants/Colors';
import * as WebBrowser from 'expo-web-browser';
import * as AuthSession from 'expo-auth-session';
import { useOAuth } from '@clerk/clerk-expo';
import { useNavigation, useNavigationState } from '@react-navigation/native';

export const useWarmUpBrowser = () => {
  useEffect(() => {
    void WebBrowser.warmUpAsync();
    return () => {
      void WebBrowser.coolDownAsync();
    };
  }, []);
};

WebBrowser.maybeCompleteAuthSession();

export default function WelcomeScreen() {
  useWarmUpBrowser();
  const navigation = useNavigation();
  const { startOAuthFlow } = useOAuth({ strategy: 'oauth_google' });

  const onPress = useCallback(async () => {
    try {
      const { createdSessionId, setActive } = await startOAuthFlow({
        redirectUrl: AuthSession.makeRedirectUri(),
      });

      if (createdSessionId) {
        await setActive({ session: createdSessionId });
        navigation.navigate('Home');
      }
    } catch (err) {
      console.error('Google Sign-In error:', err);
    }
  }, []);

  const navState = useNavigationState((state) => state);

  useEffect(() => {
    if (navState && navState.key) {
      console.log('Navigation loaded:', navState.key);
      // You can run any logic here safely
    } else {
      console.log('Navigation not loaded yet');
    }
  }, [navState]);

  return (
    <View style={{ backgroundColor: Colors.White, height: '100%' }}>
      <Image
        source={require('../assets/images/login.png')}
        style={{
          width: '100%',
          height: 500,
          borderBottomLeftRadius: 5,
          borderBottomRightRadius: 5,
          shadowColor: Colors.gray,
          shadowOpacity: 0.3,
          shadowOffset: { width: 0, height: 4 },
          shadowRadius: 6,
          elevation: 7,
        }}
      />
      <View style={{ padding: 20, display: 'flex', alignItems: 'center' }}>
        <Text style={{ fontWeight: 'bold', fontSize: 30, textAlign: 'center' }}>
          Ready to make a new friend?
        </Text>
        <Text
          style={{
            fontSize: 17,
            textAlign: 'center',
            color: Colors.Gray,
          }}
        >
          Let’s adopt a pet which you like and make their life happy again
        </Text>
        <Pressable
          onPress={onPress}
          style={{
            padding: 14,
            marginTop: 75,
            backgroundColor: Colors.Primary,
            width: '100%',
            borderRadius: 14,
            shadowColor: Colors.gray,
            shadowOpacity: 0.3,
            shadowOffset: { width: 0, height: 4 },
            shadowRadius: 6,
            elevation: 7,
          }}
        >
          <Text style={{ textAlign: 'center', fontSize: 18 }}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
}
