import React, { useState } from 'react';
import { View, Text, SafeAreaView, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import Features from '../components/Features';
import { DummyMessage } from '../constants';

export default function HomeScreen() {
  const [message, useMessage] = useState(DummyMessage);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);
  const stopSpeaking = () => setSpeaking(false);
  const clear = () => useMessage([]);

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        {/* Bot Icon */}
        <View style={styles.botContainer}>
          <Image 
            source={require('../assets/images/bot.png')} 
            style={styles.botImage} 
          />
        </View>

        {/* Assistant or Features */}
        {message.length > 0 ? (
          <View style={styles.messageSection}>
            <Text style={styles.assistantHeading}>Assistant</Text>

            <View style={styles.chatBox}>
              <ScrollView
                bounces={false}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.scrollContent}
              >
                {message.map((msg, index) => {
                  if (msg.role === 'assistant') {
                    if (msg.contents.includes('https')) {
                      return (
                        <View key={index} style={styles.imageMessageWrapper}>
                          <View style={styles.imageContainer}>
                            <Image
                              source={require('../assets/images/gpt.png')}
                              style={styles.imageStyle}
                            />
                          </View>
                        </View>
                      );
                    } else {
                      return (
                        <View key={index} style={styles.assistantBubble}>
                          <Text style={styles.messageText}>{msg.contents}</Text>
                        </View>
                      );
                    }
                  } else {
                    return (
                      <View key={index} style={styles.messageRow}>
                        <View style={styles.userBubble}>
                          <Text style={styles.messageText}>{msg.contents}</Text>
                        </View>
                      </View>
                    );
                  }
                })}
              </ScrollView>
            </View>
          </View>
        ) : (
          <Features />
        )}

        {/* Recording & Control Buttons */}
        <View style={styles.footer}>
          <TouchableOpacity>
            <Image 
              source={
                recording
                  ? require('../assets/images/animated.jpg')
                  : require('../assets/images/voice.png')
              }
              style={styles.voiceIcon}
            />
          </TouchableOpacity>

          {message.length > 0 && (
            <TouchableOpacity onPress={clear} style={styles.clearButton}>
              <Text style={styles.buttonText}>Clear</Text>
            </TouchableOpacity>
          )}

          {speaking && (
            <TouchableOpacity onPress={stopSpeaking} style={styles.stopButton}>
              <Text style={styles.buttonText}>Stop</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 20,
    justifyContent: 'flex-start',
    marginTop: 50,
  },
  botContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  botImage: {
    width: hp(15),
    height: hp(15),
    resizeMode: 'contain',
  },
  messageSection: {
    flex: 1,
    marginTop: 10,
  },
  assistantHeading: {
    fontSize: wp(5),
    fontWeight: '600',
    color: '#374151',
    marginLeft: wp(1),
    marginBottom: 8,
  },
  chatBox: {
    backgroundColor: '#e5e7eb',
    borderRadius: 24,
    height: hp(50),
    padding: 16,
  },
  scrollContent: {
    gap: 16,
  },
  imageMessageWrapper: {
    flex: 1,
    justifyContent: 'flex-start',
  },
  imageContainer: {
    padding: 8,
    backgroundColor: '#A7F3D0',
    borderTopLeftRadius: 0,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },
  imageStyle: {
    height: wp(60),
    width: wp(60),
    borderRadius: 16,
    resizeMode: 'contain',
  },
  assistantBubble: {
    backgroundColor: '#A7F3D0',
    borderRadius: 16,
    padding: 12,
    width: wp(70),
    borderTopLeftRadius: 0,
  },
  messageRow: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  userBubble: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 12,
    width: wp(70),
    borderTopRightRadius: 0,
  },
  messageText: {
    fontSize: wp(4),
    color: '#111827',
  },
  footer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  voiceIcon: {
    width: hp(10),
    height: hp(10),
    borderRadius: 100,
  },
  clearButton: {
    backgroundColor: '#a3a3a3',
    borderRadius: 24,
    padding: 8,
    position: 'absolute',
    right: 40,
    top: 10,
  },
  stopButton: {
    backgroundColor: '#f87171',
    borderRadius: 24,
    padding: 8,
    position: 'absolute',
    left: 40,
    top: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
  },
});
