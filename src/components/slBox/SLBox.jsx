import React, { useState } from 'react'

const SLBox = () => {

    const [currencyPair, setCurrencyPair] = useState('');
    const [stopLoss, setStopLoss] = useState('');
    const [askSL, setAskSL] = useState('');
    const [bidSL, setBidSL] = useState('');
    const [pipsSL, setPipsSL] = useState('');

    const handleChange1 = (e) => {
        setCurrencyPair(e.target.value);
    };
  
    const handleChange2 = (e) => {
        setAskSL(e.target.value);
    };
  
    const handleChange3 = (e) => {
        setBidSL(e.target.value);
    };

    const handleChange4 = (e) => {
        setPipsSL(e.target.value);
    };

    const handleCalculate = () => {
        var pipInRate;
        var sl;
      
        // GOING SHORT
        if (askSL === "") {
            if (currencyPair === "0.01") {
                pipInRate = Number(pipsSL) / 100;
                sl = Number(bidSL) + Number(pipInRate);
                setStopLoss(`Stop Loss = ${sl}`);
            }

            if (currencyPair === "0.0001") {
                pipInRate = Number(pipsSL) / 10000;
                sl = Number(bidSL) + Number(pipInRate);
                setStopLoss(`Stop Loss = ${sl}`);
            }
        }

        // GOING LONG
        if (bidSL === "") {
            if (currencyPair === "0.01") {
                pipInRate = Number(pipsSL) / 100;
                sl = Number(askSL) - Number(pipInRate);
                setStopLoss(`Stop Loss = ${sl}`);
            }
    
            if (currencyPair === "0.0001") {
                pipInRate = Number(pipsSL) / 10000;
                sl = Number(askSL) - Number(pipInRate);
                setStopLoss(`Stop Loss = ${sl}`);
            }
        }
  
    };

  return (
    <div className="display px-4 md:px-8 py-8" id="display">
        {/* MENU 4 */}
        <div className="atp" id="SL">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
                stop loss calculation
            </h3>
            <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
                <p>ALL FIELDS ARE REQUIRED EXCEPT</p>
                <p><b>Going Long</b> Leave <span className="font-semibold">Bid</span> blank</p>
                <p><b>Going Short</b> Leave <span className="font-semibold">Ask</span> blank</p>
            </div>
            <div className="mt-8" id="inputs4">
                <div>
                    <label for="currencyPair" className="text-xl mr-2">Currency Pair: </label> 
                    <select name="currencyPair" id="currencyPair" required value={currencyPair} onChange={handleChange1} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 ">
                        <option value="">select</option>
                        <option value="0.0001">Non-Yen Pair</option>
                        <option value="0.01">Yen Pair</option>
                    </select>
                </div>
                <div>
                    <label for="askSL" className="text-xl mr-2">Ask: </label>
                    <input type="text" name="askSL" id="askSL" value={askSL} onChange={handleChange2}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 1.07842" />
                </div>
                <div>
                    <label for="bidSL" className="text-xl mr-2">Bid: </label>
                    <input type="text" name="bidSL" id="bidSL" value={bidSL} onChange={handleChange3}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 1.06842" />
                </div>
                <div>
                    <label for="pipsSL" className="text-xl mr-2">Pips: </label>
                    <input type="text" name="pipsSL" id="pipsSL" value={pipsSL} onChange={handleChange4} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 30" />
                </div>
                <div className="my-4">
                    <button className="md:w-100-70 py-2 px-8 my-2 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton4">Calculate</button>
                    <button className=" py-2 px-8 my-2 ml-4 rounded-lg font-bold text-2xl text-white cursor-default" id="stopLoss">{stopLoss}</button>
                </div>
            </div>
        </div>
        {/* END OF MENU 4 */}
    </div>
  )
}

export default SLBox