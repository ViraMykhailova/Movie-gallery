import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchMovies, fetchShows } from '../../redux/movieSlice';
import MovieList from '../MovieList/MovieList';

function Home() {
    const dispatch = useDispatch();

    const movieText = 'Harry';
    const showsText = 'Friends';

    useEffect(() => {
        dispatch(fetchMovies(movieText));
        dispatch(fetchShows(showsText));
    }, [dispatch]);

    return (
        <div>
            <MovieList />
        </div>
    );
}

export default Home;
