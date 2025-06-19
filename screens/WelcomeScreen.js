import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headingContainer}>
        <Text style={styles.title}>Jarvis</Text>
        <Text style={styles.subtitle}>The Future is here, powered by AI.</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image 
          source={require('../assets/images/assistant.png')} 
          style={styles.image} 
        />
      </View>

      <TouchableOpacity style={styles.button}
      onPress={()=> navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    backgroundColor: 'white',
    
    
  },
  headingContainer: {
    alignItems: 'center',
    
    gap: 8, // optional for vertical spacing, or use marginBottom
  },
  title: {
    fontWeight: 'bold',
    color: '#374151', // Tailwind gray-700
    fontSize: 20,
    textAlign: 'center',
  },
  subtitle: {
    fontWeight: '600',
    color: '#4B5563', // Tailwind gray-600
    textAlign: 'center',
    letterSpacing: 1,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: wp(75),
    height: wp(75),
    resizeMode: 'contain'
  },
  button: {
    backgroundColor: '#059669', // Tailwind emerald-600
    marginHorizontal: 20,
    padding: 16,
    borderRadius: 16,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 22,
    textAlign: 'center',
  },
});
