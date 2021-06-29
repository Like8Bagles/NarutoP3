import React from 'react'
import { NavLink } from "react-router-dom";

const linkStyle = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    TextDecoration: 'none',
    color: 'white',
    background: 'black',
    align: 'center'
}

const Navigation = () => {
    return (
        <div>
            <NavLink
                to="/"
                exact
                style={linkStyle}
                activeStyle={{
                    background: 'darkgrey'
                }}
            >Home</NavLink>
            <NavLink
            to="/sensei"
            exact
            style={linkStyle}
            activeStyle={{
                background: 'darkgrey'
            }}
            >Sensei</NavLink>
        </div>
    )
}

export default Navigation