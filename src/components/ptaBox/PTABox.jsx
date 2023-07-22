import React, { useState } from 'react'

const PTABox = () => {

  const [lotSize, setLotSize] = useState('');
  const [currencyPair, setCurrencyPair] = useState('');
  const [exchangeRate, setExchangeRate] = useState('');
  const [pipValue, setPipValue] = useState('');
  const [CP, setCP] = useState('');
  const [ER, setER] = useState('');
  const [LS, setLS] = useState('');
  const [Pips, setPips] = useState('');
  const [amount, setAmount] = useState('');

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
    setPipValue(e.target.value);
  };

  const handleCalculate = () => {
    // Checking if fields are empty
    if ((lotSize === "") || (currencyPair === "") || (pipValue === "") || (exchangeRate === "")) {
      alert(` Fields are required! `);
    } else {
      var pipValueCalc = ((Number(currencyPair)/Number(exchangeRate)) * Number(lotSize));
      var userTotalAmount = (Number(pipValue) * Number(pipValueCalc));
      setCP(currencyPair);
      setER(exchangeRate);
      setLS(lotSize);
      setPips(pipValue);
      setAmount(`Amount = ${Math.ceil(userTotalAmount)}`);
    }

  };

  return (
    <div className="display px-4 md:px-8 py-8" id="display">
      
      {/* MENU 2 */}
      <div className="atp" id="ATP">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
              calculate pips to amount
          </h3>
          <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
              <p>ALL FIELDS ARE REQUIRED</p>
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
                  <label for="userPips" class="text-xl mr-2">Pips: </label>
                  <input type="text" name="userPips" id="userPips" value={pipValue} onChange={handleChange4} required  class="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 30"/>
              </div>
              <div className="my-4">
                  <button className="md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton">Calculate</button>
              </div>
          </div>
      </div>
      {/* END OF MENU 2 */}

      {/* SOLUTION 2 */}
      <div className="atp_sol" id="ATP_SOL">
          <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
              pips to amount calculated
          </h3>
          <div id="outputs">
              <ul>
                  <li className="my-4"><b className="text-xl mr-2">Currency Pair</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="CP">{CP}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Exchange Rate</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="ER">{ER}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Lot Size</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="LS">{LS}</span></li>
                  <li className="my-4"><b className="text-xl mr-2">Pips</b>: <span class="text-xl text-xl bg-gray-200 rounded-lg p-2 ml-4" id="Pips">{Pips}</span></li>
                  <li className="t_pip md:w-100-70 py-2 px-8 rounded-lg font-bold text-2xl text-white"><span id="totalPips">{amount}</span></li>
              </ul>
          </div>
      </div>
      {/* END OF SOLUTION 1 */}

    </div>
  )
}

export default PTABox