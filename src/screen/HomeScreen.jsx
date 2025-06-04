// src/components/HomeScreen.jsx
import React, { useEffect, useState } from 'react';
import { View, FlatList, StyleSheet, Text, Button } from 'react-native';
import { getArtworks } from '../services/artworkService';
import StoryCard from './components/StoryCard';

export default function HomeScreen({ navigation }) {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    getArtworks()
      .then(response => setArtworks(response.data))
      .catch(error => console.error('Gagal mengambil data:', error));
  }, []);

  return (
    <View style={styles.container}>
      {/* Tombol navigasi ke Form */}
      <Button 
        title="Tambah Cerita" 
        onPress={() => navigation.navigate('Form')} 
      />

      {/* Daftar cerita */}
      <FlatList
        data={artworks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <StoryCard 
            story={item} 
            onPress={() => navigation.navigate('Detail', { story: item })}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});