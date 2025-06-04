import React from 'react';
import { View, Text, ImageBackground, StyleSheet, Pressable } from 'react-native';

export default function StoryCard({ story, onPress }) {
  return (
    <Pressable onPress={onPress}>
      <ImageBackground
        source={{ uri: story.image }}
        style={styles.image}
        imageStyle={{ borderRadius: 10 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.category}>{story.category}</Text>
          <Text style={styles.title}>{story.title}</Text>
          <Text style={styles.date}>{story.date}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    marginBottom: 20,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  category: { fontSize: 12, color: '#FFD700' },
  title: { fontSize: 18, fontWeight: 'bold', color: '#fff' },
  date: { fontSize: 12, color: '#ccc' },
});
