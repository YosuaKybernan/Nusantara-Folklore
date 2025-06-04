import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';
import api from '../api/api';

export default function FormScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');

  const handleSubmit = async () => {
    try {
    await api.post('/NusantaraFolklore', { title, artist, image });

      Alert.alert('Berhasil', 'Data ditambahkan!');
      navigation.goBack();
    } catch (error) {
      console.error(error);
      Alert.alert('Gagal', 'Coba lagi nanti.');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Judul"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Seniman"
        value={artist}
        onChangeText={setArtist}
      />
      <TextInput
        style={styles.input}
        placeholder="URL Gambar"
        value={image}
        onChangeText={setImage}
      />
      <Button title="Simpan" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 10,
    marginBottom: 15,
  },
});