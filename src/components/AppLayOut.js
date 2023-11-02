import Header from './Header';

import { Outlet } from 'react-router-dom';
const AppLayOut = () => {
    return (
        <div className="App">
            <Header />
            <Outlet /> {/** this will help to fill the parent with the child according to the path choosen*/}
        </div>
    );
}

export default AppLayOut;