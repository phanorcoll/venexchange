import React from 'react';
//import Link from 'react-router-dom';

const TopBar = () => {
    return (
        <div className="top-main-bar">
            <div className="app-name">
                VenExchange
            </div>
            <div className="social-icons">
                <a href="#">
                    <i className="fa fa-inverse fa-twitter" aria-hidden="true"></i>
                </a>
            </div>
        </div>
    );
}

export default TopBar;