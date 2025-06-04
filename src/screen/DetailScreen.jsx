import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Button, Alert } from 'react-native';
import { hapusCerita } from '../services/firestoreService';

export default function DetailScreen({ route, navigation }) {
  const { story } = route.params;

  const handleDelete = () => {
    Alert.alert(
      'Hapus Cerita',
      'Yakin ingin menghapus cerita ini?',
      [
        { text: 'Batal' },
        {
          text: 'Hapus',
          style: 'destructive',
          onPress: async () => {
            await hapusCerita(story.id);
            Alert.alert('Terhapus', 'Cerita sudah dihapus');
            navigation.goBack();
          },
        },
      ]
    );
  };

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

        <Button title="Hapus Cerita" color="red" onPress={handleDelete} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  image: { height: 250, justifyContent: 'flex-end' },
  overlay: { backgroundColor: 'rgba(0, 0, 0, 0.4)', padding: 20 },
  title: { fontSize: 26, fontWeight: 'bold', color: '#fff' },
  content: { padding: 20 },
  category: { fontSize: 14, color: '#007BFF', marginBottom: 5 },
  date: { fontSize: 12, color: '#999', marginBottom: 15 },
  description: { fontSize: 16, lineHeight: 22, color: '#333', marginBottom: 20 },
});
