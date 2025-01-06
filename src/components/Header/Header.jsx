import { useState } from 'react';
import { Link } from 'react-router';
import { useDispatch } from 'react-redux';
import userImg from '../../assets/images/user.png';

import './header.scss';
import { fetchMovies, fetchShows } from '../../redux/movieSlice';

function Header() {
    const [title, setTittle] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (title) {
            dispatch(fetchMovies(title));
            dispatch(fetchShows(title));
            setTittle('');
        }
    };

    return (
        <div className='header'>
            <div className='logo'>
                <Link to='/' style={{ textDecoration: 'none' }}>
                    Movie Gallery
                </Link>
            </div>
            <div className='search-bar'>
                <form onSubmit={handleSubmit}>
                    <input
                        type='text'
                        value={title}
                        placeholder='Search for Movie or Show'
                        onChange={(e) => setTittle(e.target.value)}
                    />
                    <button type='submit'>
                        <i className='fa fa-search'></i>
                    </button>
                </form>
            </div>

            <div className='user-img'>
                <img src={userImg} alt='userImg' />
            </div>
        </div>
    );
}

export default Header;
