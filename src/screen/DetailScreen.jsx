import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView } from 'react-native';

export default function DetailScreen({ route }) {
  const { story } = route.params; // menerima data dari navigasi

  return (
    <ScrollView style={styles.container}>
      <ImageBackground source={{ uri: story.image }} style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>{story.title}</Text>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <Text style={styles.category}>{story.category}</Text>
        <Text style={styles.date}>{story.date}</Text>
        <Text style={styles.description}>
          Ini adalah cerita rakyat berjudul {story.title}. Cerita ini berasal dari Nusantara dan memiliki pesan moral yang mendalam. 
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  image: {
    height: 250,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  category: {
    fontSize: 14,
    color: '#007BFF',
    marginBottom: 5,
  },
  date: {
    fontSize: 12,
    color: '#999',
    marginBottom: 15,
  },
  description: {
    fontSize: 16,
    lineHeight: 22,
    color: '#333',
  },
});
