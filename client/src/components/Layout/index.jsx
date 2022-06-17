
import DeskTopHeader from '../DeskTopHeader';
import LeftSideBar from '../LeftSideBar'
import './index.scss'


const Layout = () => {
    return (
        <div className='App'>
            <DeskTopHeader />
            <LeftSideBar />
        </div>
    )
};

export default Layout;