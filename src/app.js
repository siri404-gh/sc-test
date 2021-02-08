import React, { Fragment, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Menu from './menu';
import RiskLevelSelector from './risk-level-selector';
import Table from './table';
import Chart from './chart';
import 'isomorphic-fetch';

const App = () => {
    const [riskLevel, setRiskLevel] = useState(10);
    const [cones, setCones] = useState(null);
    const [initialSum, setInitialSum] = useState(10000);

    const onChangeRiskLevel = riskLevel => setRiskLevel(riskLevel);

    useEffect(() => {
        (async function fetchCones() {
            const response = await fetch('http://localhost:3000/api/cones');
            const data = await response.json();
            setCones(data);
        })();
    }, []);

    if (!cones) return null;

    return (
        <Router>
            <Fragment>
                <Menu />
                <RiskLevelSelector riskLevel={riskLevel} onChangeRiskLevel={onChangeRiskLevel} />
                Initial Sum <input type='number' value={initialSum} onChange={e => setInitialSum(+e.target.value)} />
                <Switch>
                    <Route exact path="/" component={() => <Table cones={cones} initialSum={initialSum} riskLevel={riskLevel} />} />
                    <Route path="/table" component={() => <Table cones={cones} initialSum={initialSum} riskLevel={riskLevel} />} />
                    <Route path="/chart" component={() => <Chart cones={cones} initialSum={initialSum} riskLevel={riskLevel} />} />
                </Switch>
            </Fragment>
        </Router>
    );
};

export default App;
