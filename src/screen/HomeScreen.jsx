import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, ScrollView, ImageBackground } from 'react-native';
import { SearchNormal } from 'iconsax-react-native';

const artworks = [
  {
    title: 'Malin Kundang',
    artist: 'Lagenda',
    image: 'https://storyblok-cdn.ef.com/f/60990/1200x666/14c31678b9/legenda-malin-kundang.jpg',
  },
  {
    title: 'Timun Mas',
    artist: 'Dongeng',
    image: 'https://thumbor.prod.vidiocdn.com/YupzD5G0WwupVP3MZeKELad5Wfw=/filters:quality(70)/vidio-web-prod-video/uploads/video/image/7392539/kisah-timun-mas-dan-raksasa-dongeng-anak-bahasa-indonesia-cerita-rakyat-jawa-tengah-506d6b.jpg',
  },
  {
    title: 'Sangkuriang',
    artist: 'Lagenda',
    image: 'https://twatangkubanparahu.com/wp-content/uploads/2022/10/sangkuriangjpg-7d62f9ab74a7122f1dfe48070ca6f03a_600xauto.jpg',
  },
];

    export default function HomeScreen({ navigation }) {
    const [searchText, setSearchText] = useState('');

  const filteredArtworks = artworks.filter(item =>
    item.title.toLowerCase().includes(searchText.toLowerCase())
  );


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Koleksi Karya Seni</Text>

      <View style={styles.searchBar}>
        <TextInput
          placeholder="Cari karya..."
          value={searchText}
          onChangeText={setSearchText}
          style={styles.input}
        />
        <Pressable style={styles.searchButton}>
          <SearchNormal size={20} color="#fff" />
        </Pressable>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
  {filteredArtworks.map((item, index) => (
    <Pressable key={index} onPress={() => navigation.navigate('Detail', { story: item })}>
      <ImageBackground
        source={{ uri: item.image }}
        style={styles.card}
        imageStyle={{ borderRadius: 12 }}
      >
        <View style={styles.overlay}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
      </ImageBackground>
    </Pressable>
  ))}
</ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  searchBar: {
    flexDirection: 'row',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  input: {
    flex: 1,
    paddingHorizontal: 15,
    height: 40,
  },
  searchButton: {
    backgroundColor: '#007BFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
  },
  card: {
    height: 180,
    marginBottom: 15,
    justifyContent: 'flex-end',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  artist: {
    fontSize: 14,
    color: '#ccc',
    marginTop: 5,
  },
});
