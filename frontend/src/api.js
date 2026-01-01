import axios from 'axios';

const API_URL = 'http://localhost:5000'; // <-- this must match backend port

export const getScores = (game) => axios.get(`${API_URL}/scores/${game}`);
export const postScore = (data) => axios.post(`${API_URL}/scores`, data);
