import React from 'react';
import PropTypes from 'prop-types';

const RiskLevelSelector = ({ minRiskLevel, maxRiskLevel, onChangeRiskLevel }) => {
    const defaultRisk = 10;
    const options = [];

    const onSelectChange = e => {
        console.log('======', e.target.value);
        onChangeRiskLevel(parseInt(e.target.value));
    }
    
    for(let k=minRiskLevel; k <= maxRiskLevel; ++k) {
        options.push(<option key={k} value={k}>{k}</option>);
    }
    
    return (
        <div>
            Risk level:
            <select onChange={onSelectChange} defaultValue={defaultRisk}>
                {options}
            </select>
        </div>
    );
};

RiskLevelSelector.defaultProps = {
    minRiskLevel: 3,
    maxRiskLevel: 25,
    onChangeRiskLevel: () => {}
};

RiskLevelSelector.propTypes = {
    minRiskLevel: PropTypes.number,
    maxRiskLevel: PropTypes.number,
    onChangeRiskLevel: PropTypes.func
};

export default RiskLevelSelector;
