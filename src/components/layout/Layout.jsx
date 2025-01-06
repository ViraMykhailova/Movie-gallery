import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function Layout() {
    return (
        <>
            <Header />
            <div className='container'>
                <Outlet />
            </div>
            <Footer />
        </>
    );
}

export default Layout;
