// src/services/artworkService.js
import api from '../api/api';

export const getArtworks = () => api.get('/NusantaraFolklore');
export const createArtwork = (data) => api.post('/NusantaraFolklore', data);
export const updateArtwork = (id, data) => api.put(`/NusantaraFolklore/${id}`, data);
export const deleteArtwork = (id) => api.delete(`/NusantaraFolklore/${id}`);
