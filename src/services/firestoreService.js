// src/services/firestoreService.js
import { db } from '../firebaseConfig';
import { collection, addDoc, getDocs, doc, deleteDoc } from 'firebase/firestore';

// Referensi ke koleksi 'cerita'
const ceritaRef = collection(db, 'cerita');

// Fungsi menambahkan data ke koleksi 'cerita'
export const tambahCerita = async (data) => {
  try {
    await addDoc(ceritaRef, data);
  } catch (error) {
    console.error('Gagal menambahkan cerita:', error);
    throw error;
  }
};

// Fungsi mengambil semua cerita
export const ambilCerita = async () => {
  try {
    const snapshot = await getDocs(ceritaRef);
    return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
  } catch (error) {
    console.error('Gagal mengambil cerita:', error);
    throw error;
  }
};

// Fungsi menghapus cerita berdasarkan ID
export const hapusCerita = async (id) => {
  try {
    await deleteDoc(doc(db, 'cerita', id));
  } catch (error) {
    console.error('Gagal menghapus cerita:', error);
    throw error;
  }
};
