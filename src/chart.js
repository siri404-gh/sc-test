import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { drawChart } from './utils';

const Chart = ({ cones, riskLevel, initialSum }) => {

    useEffect(() => {
        if (cones.length) drawChart(document.getElementById('canvas'), riskLevel, cones, initialSum);
    }, [initialSum]);

    if (!cones.length) return null;

    return (
        <canvas
            id='canvas'
            width={600}
            height={400} />
    );
};

Chart.defaultProps = {
    cones: [],
    riskLevel: 3,
    initialSum: 10000,
};

Chart.propTypes = {
    cones: PropTypes.array,
    riskLevel: PropTypes.number,
    initialSum: PropTypes.number,
};

export default Chart;
