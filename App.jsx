import { ScrollView, StyleSheet, Text, View, Image, TextInput, Pressable, ImageBackground } from 'react-native';
import { SearchNormal } from 'iconsax-react-native';
import React, { useState } from 'react';

export default function App() {
  const stories = [
    {
      title: 'Malin Kundang',
      category: 'Legenda',
      date: 'Jan 15, 2024',
      image: 'https://storyblok-cdn.ef.com/f/60990/1200x666/14c31678b9/legenda-malin-kundang.jpg',
    },
    {
      title: 'Timun Mas',
      category: 'Dongeng',
      date: 'Feb 12, 2024',
      image: 'https://thumbor.prod.vidiocdn.com/YupzD5G0WwupVP3MZeKELad5Wfw=/filters:quality(70)/vidio-web-prod-video/uploads/video/image/7392539/kisah-timun-mas-dan-raksasa-dongeng-anak-bahasa-indonesia-cerita-rakyat-jawa-tengah-506d6b.jpg',
    },
    {
      title: 'Sangkuriang',
      category: 'Legenda',
      date: 'Mar 5, 2024',
      image: 'https://twatangkubanparahu.com/wp-content/uploads/2022/10/sangkuriangjpg-7d62f9ab74a7122f1dfe48070ca6f03a_600xauto.jpg',
    },
    {
      title: 'Bawang Merah Bawang Putih',
      category: 'Cerita Rakyat',
      date: 'Apr 20, 2024',
      image: 'https://cdn1.katadata.co.id/media/images/temp/2023/05/10/Ilustrasi_Dongeng_Bawang_Merah_dan_Bawang_Putih-2023_05_10-14_06_25_de64abb75ad88e43934a609b86399ea2.jpg',
    },
  ];
  
const [searchText, setSearchText] = useState('');

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Nusantara Folklore</Text>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.input}
          placeholder="Cari Cerita..."
          value={searchText}
          onChangeText={setSearchText}
        />
        <Pressable style={styles.searchButton}>
          <SearchNormal size={20} color="#fff" />
        </Pressable>
      </View>

      {/* Story List */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {stories
          .filter(story =>
            story.title.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((story, index) => (
            <StoryCard key={index} story={story} />
        ))}
      </ScrollView>
    </View>
  );
}

// ===== Styles =====
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
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
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
  },
  cardImage: {
    height: 200,
    justifyContent: 'flex-end',
  },
  cardContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
  cardCategory: {
    fontSize: 12,
    color: '#FFD700',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  cardDate: {
    fontSize: 12,
    color: '#ccc',
    marginTop: 5,
  },
});

const StoryCard = ({ story }) => {
  return (
    <View style={styles.card}>
      <ImageBackground source={{ uri: story.image }} style={styles.cardImage} imageStyle={{ borderRadius: 10 }}>
        <View style={styles.cardContent}>
          <Text style={styles.cardCategory}>{story.category}</Text>
          <Text style={styles.cardTitle}>{story.title}</Text>
          <Text style={styles.cardDate}>{story.date}</Text>
        </View>
      </ImageBackground>
    </View>
  );
};
