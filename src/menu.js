import React, { Fragment } from 'react';
import { Link } from "react-router-dom";

const Menu = () => (
    <Fragment>
        <p><Link to="/">Home</Link></p>
        <p><Link to="/table">Table</Link></p>
        <p><Link to="/chart">Chart</Link></p>
    </Fragment>
);

export default Menu;
