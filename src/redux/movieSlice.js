import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import movieApi from '../common/apis/movieApi';
import { key } from '../common/apis/movieApikey';

export const fetchMovies = createAsyncThunk(
    'movies/fetchMovies',
    async (title, { rejectWithValue }) => {
        try {
            const response = await movieApi.get(
                `?apiKey=${key}&s=${title}&type=movie`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);
export const fetchShows = createAsyncThunk(
    'movies/fetchShows',
    async (title, { rejectWithValue }) => {
        try {
            const response = await movieApi.get(
                `?apiKey=${key}&s=${title}&type=series`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

export const fetchMovieOrShowDetails = createAsyncThunk(
    'movies/fetchMovieOrShowDetails',
    async (id, { rejectWithValue }) => {
        try {
            const response = await movieApi.get(
                `?apiKey=${key}&i=${id}&Plot=full`
            );
            return response.data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow: {},
    errorMovie: null,
    errorShow: null,
    errorDetails: null,
};

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {
        removeSelectedItem: (state) => {
            state.selectedMovieOrShow = {};
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.errorMovie = null;
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.movies = action.payload;
                state.errorMovie = null;
            })
            .addCase(fetchMovies.rejected, (state, action) => {
                state.errorMovie = action.payload;
            })
            .addCase(fetchShows.pending, (state) => {
                state.errorShow = null;
            })
            .addCase(fetchShows.fulfilled, (state, action) => {
                state.shows = action.payload;
                state.errorShow = null;
            })
            .addCase(fetchShows.rejected, (state, action) => {
                state.errorShow = action.payload;
            })
            .addCase(fetchMovieOrShowDetails.pending, (state) => {
                state.errorDetails = null;
            })
            .addCase(fetchMovieOrShowDetails.fulfilled, (state, action) => {
                state.selectedMovieOrShow = action.payload;
                state.errorDetails = null;
            })
            .addCase(fetchMovieOrShowDetails.rejected, (state, action) => {
                state.errorDetails = action.payload;
            });
    },
});

export const { removeSelectedItem } = movieSlice.actions;
export default movieSlice.reducer;
