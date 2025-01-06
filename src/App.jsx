import { Routes, Route } from 'react-router';
import Layout from './components/layout/Layout';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import PageNotFound from './components/PageNotFound/PageNotFound';

import './App.scss';

function App() {
    return (
        <div className='app'>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='/movie/:imdbID' element={<MovieDetail />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </div>
    );
}

export default App;
