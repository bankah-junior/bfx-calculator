import React, { useState } from 'react'

const RMBox = () => {

    var lossPerPipCal;
    const [riskTolerance, setRiskTolerance] = useState('');
  const [riskTolerancePercent, setRiskTolerancePercent] = useState('');
  const [stopLossPips, setStopLossPips] = useState('');
  const [rmAmount, setRMAmount] = useState('');
  const [rmAmountPercent, setRMAmountPercent] = useState('');
  const [rmStopLoss, setRMStopLoss] = useState('');
  const [lossPerPip, setLossPerPip] = useState('');

  const handleChange1 = (e) => {
    setRiskTolerance(e.target.value);
  };

  const handleChange2 = (e) => {
    setRiskTolerancePercent(e.target.value);
  };

  const handleChange3 = (e) => {
    setStopLossPips(e.target.value);
  };

  const handleCalculate = () => {
    // Checking if fields are empty
    // if ((riskTolerance === "") || (stopLossPips === "")) {
    //     alert(` All Fields are required! \n Percentage of (RT) is optional`);
    // };

    if ((riskTolerance === "") || (stopLossPips === "")) {
        alert(` All Fields are required! \n Percentage of (RT) is optional`);
    } else if ((riskTolerancePercent === "")) {
        lossPerPipCal = (Number(riskTolerance) / Number(stopLossPips));
        setRMAmount(riskTolerance);
        setRMAmountPercent(riskTolerancePercent);
        setRMStopLoss(stopLossPips);
        setLossPerPip(`Loss Per Pip = ${Number(lossPerPipCal)}`);
    } else {
        var valueOfPercent = (Number(riskTolerancePercent) / 100);
        var totalPercentOfAmount = (valueOfPercent * Number(riskTolerance));
        lossPerPipCal = (totalPercentOfAmount / Number(stopLossPips));
        setRMAmount(riskTolerance);
        setRMAmountPercent(riskTolerancePercent);
        setRMStopLoss(stopLossPips);
        setLossPerPip(`Loss Per Pip = ${Number(lossPerPipCal)}`);
    }

  };

  return (
    <div className="display px-4 md:px-8 py-8" id="display">

        {/* MENU 3 */}
        <div className="atp" id="RM">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
                risk management calculation
            </h3>
            <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
                <p>ALL FIELDS ARE REQUIRED</p>
                <p>Except that <b>Percentage of (RT)</b> is optional</p>
            </div>
            <div className="mt-8" id="inputs3">
                <div>
                    <label for="riskTolerance" className="text-xl mr-2">Risk Tolerance(RT): </label>
                    <input type="text" name="riskTolerance" id="riskTolerance" value={riskTolerance} onChange={handleChange1} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 10000" />
                </div>
                <div>
                    <label for="riskTolerancePercent" className="text-xl mr-2">Percentage of (RT): </label>
                    <input type="text" name="riskTolerancePercent" id="riskTolerancePercent" value={riskTolerancePercent}  onChange={handleChange2} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 2" />
                </div>
                <div>
                    <label for="stopLossPips" className="text-xl mr-2">Stop Loss (pips): </label>
                    <input type="text" name="stopLossPips" id="stopLossPips" value={stopLossPips} required  onChange={handleChange3} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 30" />
                </div>
                <div className="my-4">
                    <button className="md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton3">Calculate</button>
                </div>
            </div>
        </div>
        {/* END OF MENU 3 */}

        {/* SOLUTION 3 */}
        <div className="atp_sol" id="RM_SOL">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
                risk management calculated
            </h3>
            <div id="outputs">
                <ul>
                    <li className="my-4"><b className="text-xl mr-2">Risk Tolerance</b>: <span className="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="rmAmount">{rmAmount}</span></li>
                    <li className="my-4"><b className="text-xl mr-2">Percentage of (RT)</b>: <span className="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="rmAmountPercent">{rmAmountPercent}</span></li>
                    <li className="my-4"><b className="text-xl mr-2">Stop Loss</b>: <span className="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="rmStopLoss">{rmStopLoss}</span></li>
                    <li className="t_pip md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white"><span id="lossPerPip">{lossPerPip}</span></li>
                </ul>
            </div>
        </div>
        {/* END OF SOLUTION 3 */}

    </div>
  )
}

export default RMBox