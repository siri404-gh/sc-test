import React, { Fragment } from 'react';

const Menu = ({ tag }) => {
    const Tag = tag;

    return (
        <Fragment>
            <p><Tag to="/">Home</Tag></p>
            <p><Tag to="/table">Table</Tag></p>
            <p><Tag to="/chart">Chart</Tag></p>
        </Fragment>
    );
};

Menu.defaultProps = {
    tag: 'a',
};

export default Menu;
