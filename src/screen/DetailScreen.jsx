import React from 'react';
import { View, Text, StyleSheet, ImageBackground, ScrollView, Alert, Button } from 'react-native';
import { deleteArtwork } from '../services/artworkService'; // import deleteArtwork

export default function DetailScreen({ route, navigation }) {
  const { story } = route.params;

  const handleDelete = async () => {
    Alert.alert(
      'Konfirmasi Hapus',
      'Yakin ingin menghapus cerita ini?',
      [
        { text: 'Batal', style: 'cancel' },
        { 
          text: 'Hapus', 
          style: 'destructive',
          onPress: async () => {
            try {
              await deleteArtwork(story.id);
              Alert.alert('Berhasil', 'Cerita berhasil dihapus');
              navigation.navigate('Home');  // kembali ke Home setelah hapus
            } catch (error) {
              console.error(error);
              Alert.alert('Gagal', 'Gagal menghapus cerita. Coba lagi.');
            }
          }
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

        {/* Tombol Hapus */}
        <View style={{ marginTop: 20 }}>
          <Button title="Hapus Cerita" color="red" onPress={handleDelete} />
        </View>
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
