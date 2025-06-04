import React, { useState } from 'react';
import { View, TextInput, Button, Alert } from 'react-native';
import { tambahCerita } from '../services/firestoreService';
import { useNavigation } from '@react-navigation/native';

const FormScreen = () => {
  const [title, setTitle] = useState('');
  const [artist, setArtist] = useState('');
  const [image, setImage] = useState('');
  const navigation = useNavigation();

  const handleSubmit = async () => {
    try {
      await tambahCerita({ title, artist, image });
      Alert.alert('Berhasil', 'Cerita ditambahkan!');
      navigation.goBack();
    } catch (e) {
      Alert.alert('Gagal', 'Terjadi kesalahan saat menambah cerita.');
      console.error(e);
    }
  };

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Judul" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Seniman" value={artist} onChangeText={setArtist} />
      <TextInput placeholder="URL Gambar" value={image} onChangeText={setImage} />
      <Button title="Simpan Cerita" onPress={handleSubmit} />
    </View>
  );
};

export default FormScreen;
