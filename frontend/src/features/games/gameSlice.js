import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'http://localhost:3000';

export const fetchGames = createAsyncThunk('games/fetchGames', async () => {
    const response = await axios.get(`${API_URL}/api/games`);
    return response.data;
});

export const gameSlice = createSlice({
    name: 'games',
    initialState: {
        games: [],
        status: 'idle',
        error: null,
    },
    extraReducers: (builder) => {
        builder
         .addCase(fetchGames.pending, (state) => {
            state.status = 'loading';
         })
         .addCase(fetchGames.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.games = action.payload;
         })
         .addCase(fetchGames.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message;
         })
    }
})


export default gameSlice.reducer
