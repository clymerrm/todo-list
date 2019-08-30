import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <header style={headerStyle}>
            <h1>Target Quality 2019 Things To Do</h1>
            <Link style={linkStyle} to="/">Home</Link>
            <a style={linkStyle} href = "https://kwsqa.org/tq2019/schedule/"> | Schedule</a>
            <a style={linkStyle} href = "https://kwsqa.org/tq2019/speaker-information//"> | Speakers</a>
        </header>
    )
};

const headerStyle = {
    background: "#333",
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
};

export default Header;
