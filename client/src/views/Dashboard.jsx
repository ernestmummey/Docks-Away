import React from 'react';
import HeaderBar from '../components/HeaderBar'
import LaunchTable from '../components/LaunchTable'
import BoatsOutTable from '../components/BoatsOutTable'


const Dashboard = () => {
    return (
        <div>
            <HeaderBar/>
            <LaunchTable/>
            <BoatsOutTable/>
        </div>
    )
};

export default Dashboard;