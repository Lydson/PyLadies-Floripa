import React from 'react';
import logo from '../assets/logo.png';
import titleLogo from '../assets/title-logo.png';

const LogoTitle = () => {
    return <div className='d-flex align-items-center'>
        <img className='logo me-4' src={logo} />
        <img className='logo-title' src={titleLogo} />
    </div>;
}

export default LogoTitle;