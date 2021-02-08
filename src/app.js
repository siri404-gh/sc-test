import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './menu';
import RiskLevelSelector from './risk-level-selector';
import Table from './table';
import Chart from './chart';

const App = () => {
    const [riskLevel, setRiskLevel] = useState(10);
    const onChangeRiskLevel = riskLevel => setRiskLevel(riskLevel);

    return (
        <Router>
            <Menu />
            <RiskLevelSelector riskLevel={riskLevel} onChangeRiskLevel={onChangeRiskLevel} />
            <Route exact path="/" component={() => <Table riskLevel={riskLevel} />} />
            <Route path="/table" component={() => <Table riskLevel={riskLevel} />} />
            <Route path="/chart" component={() => <Chart riskLevel={riskLevel} />} />
        </Router>
    );
};

export default App;
