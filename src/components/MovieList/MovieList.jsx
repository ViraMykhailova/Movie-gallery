import { useSelector } from 'react-redux';
import MovieCard from '../MovieCard/MovieCard';
import { settings } from '../../common/settings';

import Slider from 'react-slick';

import './movieList.scss';

function MovieList() {
    const { movies, shows, errorMovie, errorShow } = useSelector(
        (state) => state.movies
    );

    const renderMovies =
        movies?.Response === 'True' ? (
            movies.Search.map((movie) => (
                <MovieCard key={movie.imdbID} data={movie} />
            ))
        ) : (
            <div className='movies-error'>
                <h3>{movies?.Error}</h3>
            </div>
        );

    const renderShows =
        shows?.Response === 'True' ? (
            shows.Search.map((show) => (
                <MovieCard key={show.imdbID} data={show} />
            ))
        ) : (
            <div className='movies-error'>
                <h3>{shows?.Error}</h3>
            </div>
        );

    return (
        <div className='movies-wrapper'>
            <div className='movies-list'>
                <h3>Movies</h3>
                {Object.keys(movies || {}).length === 0 && (
                    <div>...Movies are Loading</div>
                )}
                {errorMovie && <div>...Oops, something went wrong</div>}
                <div className='movies-container'>
                    <Slider {...settings}>{renderMovies}</Slider>
                </div>
            </div>
            <div className='shows-list'>
                <h3>Shows</h3>
                {Object.keys(shows || {}).length === 0 && (
                    <div>...Shows are Loading</div>
                )}
                {errorShow && <div>...Oops, something went wrong</div>}
                <div className='movies-container'>
                    <Slider {...settings}>{renderShows}</Slider>
                </div>
            </div>
        </div>
    );
}

export default MovieList;
