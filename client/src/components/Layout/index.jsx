import { useState } from 'react';
import DeskTopHeader from '../DeskTopHeader';
import LeftSideBar from '../LeftSideBar'
import ListTable from '../ListTable';
import './index.scss'


const Layout = () => {
    const [launchHeader, setLaunchHeader]= useState(['time', 'customer', 'slot', 'place', 'launch'])
    const [stowHeader, setStowHeader] = useState(['slot', 'boat', 'customer', 'place', 'stow'])


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
                        <ListTable data={ launchHeader } />
                        <ListTable data={ stowHeader }/>
                </div>
            </div>
        </div>
    )
};

export default Layout;