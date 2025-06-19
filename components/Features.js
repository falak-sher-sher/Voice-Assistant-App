import { View, Text, Image, StyleSheet } from 'react-native';
import React from 'react';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default function Features() {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Features</Text>

      {/* Feature Box: ChatGPT 1 */}
      

      {/* Feature Box: ChatGPT 2 */}
      <View style={[styles.featureBox, { backgroundColor: '#A7F3D0' }]}>
        <View style={styles.iconRow}>
          <Image
            source={require('../assets/images/gpt.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>ChatGPT</Text>
        </View>
        <Text style={styles.description}>
          ChatGPT is an AI-powered conversational agent developed by OpenAI, designed to understand and generate human-like text based on the input it receives
        </Text>
      </View>

      {/* Feature Box: DALL-E */}
      <View style={[styles.featureBox, { backgroundColor: '#E9D5FF' }]}>
        <View style={styles.iconRow}>
          <Image
            source={require('../assets/images/chip.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>DALL-E</Text>
        </View>
        <Text style={styles.description}>
          ChatGPT is an AI-powered conversational agent developed by OpenAI, designed to understand and generate human-like text based on the input it receives
        </Text>
      </View>

      {/* Feature Box: Smart AI */}
      <View style={[styles.featureBox, { backgroundColor: '#CFFAFE' }]}>
        <View style={styles.iconRow}>
          <Image
            source={require('../assets/images/ai.png')}
            style={styles.icon}
          />
          <Text style={styles.title}>Smart AI</Text>
        </View>
        <Text style={styles.description}>
          ChatGPT is an AI-powered conversational agent developed by OpenAI, designed to understand and generate human-like text based on the input it receives
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: hp(60),
    
    justifyContent: 'flex-start',
    gap: 16, // vertical spacing between feature boxes
  },
  heading: {
    fontWeight: '600',
    color: '#374151', // Tailwind gray-700
    fontSize: wp(6.5),
  },
  featureBox: {
    padding: 16,
    borderRadius: 16,
    gap: 8,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  icon: {
    height: hp(4),
    width: wp(4),
    resizeMode: 'contain',
  },
  title: {
    fontSize: wp(4.5),
    fontWeight: '600',
    color: '#374151', // gray-700
  },
  description: {
    fontSize: wp(3.8),
    fontWeight: '500',
    color: '#374151', // gray-700
  },
});
