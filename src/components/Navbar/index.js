import BareksaLogo from '../../img/logo/Bareksa Logo.png';
import User from './User';
import SearchInput from './SearchInput';
import {IconButton, Badge} from '@material-ui/core';
import {NotificationsNone, SettingsOutlined, Close} from '@material-ui/icons';

import './style.scss';
import { useState } from 'react';

const Navbar = () => {
    const [isSideNav, setIsSideNav] = useState(false);

    console.log(isSideNav)

    const sideNav = () => {
        setIsSideNav(isSideNav ? false : true);
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
                <div className="container-fluid align-items-center">
                    <div className="navbar-brand mr-5">
                        <img src={BareksaLogo} alt="logo Bareksa"/>
                    </div>

                    <button onClick={sideNav} className="navbar-toggler ml-auto" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse">
                        <User />
                        <SearchInput />
                        <IconButton><Badge><NotificationsNone /></Badge></IconButton>
                        <IconButton><Badge><SettingsOutlined /></Badge></IconButton>
                    </div>

                    <div className={`sideNav position-fixed bg-light ${isSideNav ? 'active' : 'disabled'}`}>
                        <div className="text-right mb-4">
                            <button className="btn d-inline-block btn-outline-secondary" onClick={() => setIsSideNav(false)}><Close /></button>
                        </div>
                        <div className="d-flex justify-content-between mb-4" style={{flex: 1}}>
                            <User />
                            <div className="ml-4 d-flex">
                                <IconButton><Badge><NotificationsNone /></Badge></IconButton>
                                <IconButton><Badge><SettingsOutlined /></Badge></IconButton>
                            </div>
                        </div>
                        <SearchInput />
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;