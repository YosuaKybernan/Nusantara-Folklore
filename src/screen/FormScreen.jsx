import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Pressable, Alert } from 'react-native';

export default function FormScreen() {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = () => {
    if (!title || !artist || !imageUrl) {
      Alert.alert('Error', 'Mohon lengkapi semua field!');
      return;
    }

    // Simulasi simpan data
    console.log('Data ditambahkan:', { title, artist, imageUrl });
    Alert.alert('Sukses', 'Karya berhasil ditambahkan!');
    setTitle('');
    setArtist('');
    setImageUrl('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Tambah Karya Seni</Text>

      <TextInput
        placeholder="Judul Karya"
        value={title}
        onChangeText={setTitle}
        style={styles.input}
      />
      <TextInput
        placeholder="Kategori / Seniman"
        value={artist}
        onChangeText={setArtist}
        style={styles.input}
      />
      <TextInput
        placeholder="Link Gambar"
        value={imageUrl}
        onChangeText={setImageUrl}
        style={styles.input}
      />

      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Tambah</Text>
      </Pressable>
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
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
