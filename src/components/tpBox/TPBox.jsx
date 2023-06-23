import React, { useState } from 'react'

const TPBox = () => {

    const [currencyPair, setCurrencyPair] = useState('');
    const [takeProfit, setTakeProfit] = useState('');
    const [askTP, setAskTP] = useState('');
    const [bidTP, setBidTP] = useState('');
    const [pipsTP, setPipsTP] = useState('');

    const handleChange1 = (e) => {
        setCurrencyPair(e.target.value);
    };
  
    const handleChange2 = (e) => {
        setAskTP(e.target.value);
    };
  
    const handleChange3 = (e) => {
        setBidTP(e.target.value);
    };

    const handleChange4 = (e) => {
        setPipsTP(e.target.value);
    };

    const handleCalculate = () => {
        var pipInRate;
        var tp;
      
        // GOING SHORT
        if (askTP === "") {
            if (currencyPair === "0.01") {
                pipInRate = Number(pipsTP) / 1000;
                tp = Number(bidTP) - Number(pipInRate);
                setTakeProfit(`Take Profit = ${tp}`);
            }

            if (currencyPair === "0.0001") {
                pipInRate = Number(pipsTP) / 100000;
                tp = Number(bidTP) - Number(pipInRate);
                setTakeProfit(`Take Profit = ${tp}`);
            }
        }

        // GOING LONG
        if (bidTP === "") {
            if (currencyPair === "0.01") {
                pipInRate = Number(pipsTP) / 1000;
                tp = Number(askTP) + Number(pipInRate);
                setTakeProfit(`Take Profit = ${tp}`);
            }
    
            if (currencyPair === "0.0001") {
                pipInRate = Number(pipsTP) / 100000;
                tp = Number(askTP) + Number(pipInRate);
                setTakeProfit(`Take Profit = ${tp}`);
            }
        }
  
    };
  return (
    <div className="display px-4 md:px-8 py-8" id="display">
        
        {/* MENU 5 */}
        <div className="atp" id="TP">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
                take profit calculation
            </h3>
            <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
                <p>ALL FIELDS ARE REQUIRED EXCEPT</p>
                <p><b>Going Long</b> Leave <span className="font-semibold">Bid</span> blank</p>
                <p><b>Going Short</b> Leave <span className="font-semibold">Ask</span> blank</p>
            </div>
            <div className="mt-8" id="inputs5">
                <div>
                    <label for="currencyPairTP2" className="text-xl mr-2">Currency Pair: </label> 
                    <select name="currencyPairTP2" id="currencyPairTP2" required value={currencyPair} onChange={handleChange1} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 ">
                        <option value="">select</option>
                        <option value="0.0001">Non-Yen Pair</option>
                        <option value="0.01">Yen Pair</option>
                    </select>
                </div>
                <div>
                    <label for="askTP" className="text-xl mr-2">Ask: </label>
                    <input type="text" name="askTP" id="askTP" value={askTP} required onChange={handleChange2}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 1.07842" />
                </div>
                <div>
                    <label for="bidTP" className="text-xl mr-2">Bid: </label>
                    <input type="text" name="bidTP" id="bidTP" value={bidTP} onChange={handleChange3}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 1.06842" />
                </div>
                <div>
                    <label for="pipsTP" className="text-xl mr-2">Pips: </label>
                    <input type="text" name="pipsTP" id="pipsTP" value={pipsTP} onChange={handleChange4}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder="Example: 30" />
                </div>
                <div className="my-4">
                    <button className="md:w-100-70 py-2 px-8 my-2 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton5">Calculate</button>
                    <button className=" py-2 px-8 my-2 ml-4 rounded-lg font-bold text-2xl text-white cursor-default" id="takeProfit">{takeProfit}</button>
                </div>
            </div>
        </div>
        {/* END OF MENU 5 */}
        
    </div>
  )
}

export default TPBox