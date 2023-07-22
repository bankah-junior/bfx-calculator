import React, { useState } from 'react';

const ATPBox = () => {

  const [lotSize, setLotSize] = useState('');
  const [currencyPair, setCurrencyPair] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [totalAmount, setTotalAmount] = useState('');
  const [totalAmountPercent, setTotalAmountPercent] = useState('');
  const [CP, setCP] = useState('');
  const [ER, setER] = useState('');
  const [LS, setLS] = useState('');
  const [AMT, setAMT] = useState('');
  const[totalPips, setTotalPips] = useState('');

  const handleChange1 = (e) => {
    setLotSize(e.target.value);
  };

  const handleChange2 = (e) => {
    setCurrencyPair(e.target.value);
  };

  const handleChange3 = (e) => {
    setExchangeRate(e.target.value);
  };

  const handleChange4 = (e) => {
    setTotalAmount(e.target.value);
  };

  const handleChange5 = (e) => {
    setTotalAmountPercent(e.target.value);
  };

  const handleCalculate = () => {
    // Checking if fields are empty
    if ((lotSize === "") || (currencyPair === "") || (totalAmount === "") || (exchangeRate === "")) {
        alert(` Fields are required! \n Percentage of TA is optional`);
    } else if(totalAmountPercent === "") { 
        // Calculation when "Percentage of TA" is empty
        var pipValue = (Number(currencyPair)/Number(exchangeRate)) * Number(lotSize);
        var numberOfPips = (Number(totalAmount) / Number(pipValue));
        setCP(currencyPair);
        setER(exchangeRate);
        setLS(lotSize);
        setAMT(totalAmount);
        setTotalPips(`${Math.ceil(numberOfPips)} pips`);
    } else {
        // Calculation when all fields are not empty
        var pipValue2 = ((Number(currencyPair)/Number(exchangeRate)) * Number(lotSize));
        var riskTolerance = ((Number(totalAmountPercent)/100) * Number(totalAmount));
        var numberOfPips2 = (Number(riskTolerance) / Number(pipValue2));
        setCP(currencyPair);
        setER(exchangeRate);
        setLS(lotSize);
        setAMT(riskTolerance);
        setTotalPips(`${Math.ceil(numberOfPips2)} pips`);
    }

  };

  return (
    <div className="display px-4 md:px-8 py-8" id="display">
      
      {/* MENU 1 */}
      <div className="atp" id="ATP">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
              calculate amounts to pips
          </h3>
          <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
              <p>ALL FIELDS ARE REQUIRED</p>
              <p>Except that <b>Percentage of (TA)</b> is optional</p>
          </div>
          <div className="mt-8" id="inputs">
              <div>
                  <label for="lotSize" className="text-xl mr-2">Lot Size: </label>
                  <select name="lotSize" id="lotSize" required value={lotSize} onChange={handleChange1} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2">
                      <option value="">select</option>
                      <option value="100000">Standard</option>
                      <option value="10000">Mini</option>
                      <option value="1000">Micro</option>
                      <option value="100">Nano</option>
                  </select>
              </div>
              <div>
                  <label for="currencyPair" className="text-xl mr-2">Currency Pair: </label> 
                  <select name="currencyPair" id="currencyPair" required value={currencyPair} onChange={handleChange2} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 ">
                      <option value="">select</option>
                      <option value="0.0001">Non-Yen Pair</option>
                      <option value="0.01">Yen Pair</option>
                  </select>
              </div>
              <div>
                  <label for="exchangeRate" className="text-xl mr-2">Exchange Rate: </label>
                  <input type="text" name="exchangeRate" id="exchangeRate" value={exchangeRate} onChange={handleChange3} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 1.06541" />
              </div>
              <div>
                  <label for="totalAmount" className="text-xl mr-2">Total Amount (TA): </label>
                  <input type="text" name="totalAmount" id="totalAmount" value={totalAmount} onChange={handleChange4} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 10000" />
              </div>
              <div>
                  <label for="totalAmountPercent" className="text-xl mr-2">Percentage of TA: </label>
                  <input type="text" name="totalAmountPercent" id="totalAmountPercent" value={totalAmountPercent} onChange={handleChange5}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 2" />
              </div>
              <div className="my-4">
                  <button className="md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton">Calculate</button>
              </div>
          </div>
      </div>
      {/* END OF MENU 1 */}

      {/* SOLUTION 1 */}
      <div className="atp_sol" id="ATP_SOL">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
              amounts to pips calculated
          </h3>
          <div id="outputs">
              <ul>
                  <li className="my-4"><b className="text-xl mr-2">Currency Pair</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="CP">{CP}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Exchange Rate</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="ER">{ER}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Lot Size</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="LS">{LS}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Amount</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="AMT">{AMT}</span></li>
                  <li className="t_pip md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white"><span id="totalPips">{totalPips}</span></li>
              </ul>
          </div>
      </div>
      {/* END OF SOLUTION 1 */}

    </div>
  )
}

export default ATPBox