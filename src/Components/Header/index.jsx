import React from 'react';

const Header = (props) => {
    return (
        <h2 style={{color: props.color}}>{props.text}</h2>
    )
};

export default Header;