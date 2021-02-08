import React from 'react';
import PropTypes from 'prop-types';
import { calculateTimeSeries } from './utils';


const Table = ({ cones, riskLevel, initialSum }) => {
    if (!cones.length) return null; 

    const cone = cones.filter(cone => cone.riskLevel == riskLevel)[0];
    const fee = 0.01;
    const timeSeries = calculateTimeSeries({
        mu: cone.mu,
        sigma: cone.sigma,
        years: 10,
        initialSum,
        monthlySum: 200,
        fee
    });
    const months = timeSeries.median.map((v, idx) => idx);
    const dataGood = timeSeries.upper95.map(v => v.y);
    const dataMedian = timeSeries.median.map(v => v.y);
    const dataBad = timeSeries.lower05.map(v => v.y);

    return (
        <table>
            <thead>
                <tr>
                    <th>month</th>
                    <th>good</th>
                    <th>median</th>
                    <th>bad</th>
                </tr>
            </thead>
            <tbody>
                {months.map((entry, idx) => (
                    <tr key={idx}>
                        <td>{entry}</td>
                        <td>{dataGood[idx]}</td>
                        <td>{dataMedian[idx]}</td>
                        <td>{dataBad[idx]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

Table.defaultProps = {
    cones: [],
    riskLevel: 3,
    initialSum: 10000,
};

Table.propTypes = {
    cones: PropTypes.array,
    riskLevel: PropTypes.number
};

export default Table;
