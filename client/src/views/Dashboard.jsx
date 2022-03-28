import React from 'react';
import HeaderBar from '../components/HeaderBar'
import BoatLaunchView from './BoatLaunchView'
import BoatsOutView from './BoatsOutView'


const Dashboard = () => {
    return (
        <div>
            <HeaderBar/>
            <BoatLaunchView/>
            <BoatsOutView/>
        </div>
    )
};

export default Dashboard;