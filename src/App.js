import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { Home, AmountToPips, PipsToAmount, RiskManagement, StopLoss, TakeProfit, NotFound, Pips } from './containers';
import './index.css';
import './tailwind.css';

const App = () => {
  return (
    <Router>
      {/* <div className='App'>
        <div className='main'>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/atp">
              <AmountToPips />
            </Route>
            <Route path="/pta">
              <PipsToAmount />
            </Route>
            <Route path="/rm">
              <RiskManagement />
            </Route>
            <Route path="/sl">
              <StopLoss />
            </Route>
            <Route path="/tp">
              <TakeProfit />
            </Route>
            <Route path="/Pips">
              <Pips />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/atp' element={<AmountToPips />} />
        <Route path='/pta' element={<PipsToAmount />} />
        <Route path='/rm' element={<RiskManagement />} />
        <Route path='/sl' element={<StopLoss />} />
        <Route path='/tp' element={<TakeProfit />} />
        <Route path='/pips' element={<Pips />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  )
}

export default App;
