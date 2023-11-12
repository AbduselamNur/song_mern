import axios from "axios";
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from "../redux/rootReducer";
import { setSongs } from "../redux/songsSlice";
import { dispatch } from "../redux/store";


const baseUrl = "http://localhost:3001/api";

export const fetchSongs = async () => {
    const response = await axios.get(`${baseUrl}/songs`);
    dispatch(setSongs(response.data));
};

export const fetchStatistics = async () => {
    const response = await axios.get(`${baseUrl}/statistics`);
    return response.data;
};
const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
