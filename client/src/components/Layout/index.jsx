import DeskTopHeader from '../DeskTopHeader';
import LeftSideBar from '../LeftSideBar'
import ListTable from '../ListTable';
import './index.scss'


const Layout = () => {
    return (
        <div className='App'>
            <div className='header-container'>
                <DeskTopHeader />
            </div>
            <div className='landing'>
                <div className='sidebar-container'>
                    <LeftSideBar />
                </div>
                <div className='page'>
                        <ListTable />
                        <ListTable />
                </div>
            </div>
        </div>
    )
};

export default Layout;