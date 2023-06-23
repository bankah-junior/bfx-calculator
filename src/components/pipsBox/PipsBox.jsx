import React, { useState } from 'react'

const PipsBox = () => {

    const [currencyPair, setCurrencyPair] = useState('');
    const [position, setPosition] = useState('');
    const [stopLoss, setStopLoss] = useState('');
    const [takeProfit, setTakeProfit] = useState('');
    const [entryPosition, setEntryPosition] = useState('');
    const[valueOfPipsSL, setValueOfPipsSL] = useState('');
    const[valueOfPipsTP, setValueOfPipsTP] = useState('');
  
    const handleChange1 = (e) => {
        setCurrencyPair(e.target.value);
    };
  
    const handleChange2 = (e) => {
        setPosition(e.target.value);
    };
  
    const handleChange3 = (e) => {
        setStopLoss(e.target.value);
    };
  
    const handleChange4 = (e) => {
        setTakeProfit(e.target.value);
    };
  
    const handleChange5 = (e) => {
        setEntryPosition(e.target.value);
    };
  
    const handleCalculate = () => {
        var epPipsValue
        var slPipsValue
        var tpPipsValue
        var pipsAnswerSlLong
        var pipsAnswerSlShort
        var pipsAnswerTPLong
        var pipsAnswerTPShort
      
      // For Non-Yen Pairs
        if (currencyPair === "100000") {
            epPipsValue = Number(entryPosition) * 100000;
            slPipsValue = Number(stopLoss) * 100000;
            tpPipsValue = Number(takeProfit) * 100000;

            pipsAnswerSlLong = epPipsValue - slPipsValue;
            pipsAnswerSlShort = slPipsValue - epPipsValue;
            pipsAnswerTPLong = tpPipsValue - epPipsValue;
            pipsAnswerTPShort = epPipsValue - tpPipsValue;

            // Going Short 
            if (position === "short") {
                setValueOfPipsSL(`SL = ${Number(pipsAnswerSlShort)}pips`);
                setValueOfPipsTP(`TP = ${Number(pipsAnswerTPShort)}pips`);
            }

            // Going Long 
            if (position === "long") {
                setValueOfPipsSL(`SL = ${Number(pipsAnswerSlLong)}pips`);
                setValueOfPipsTP(`TP = ${Number(pipsAnswerTPLong)}pips`);
            }

        }

        // For Yen Pairs
        if (currencyPair === "1000") {
            epPipsValue = Number(entryPosition) * 1000;
            slPipsValue = Number(stopLoss) * 1000;
            tpPipsValue = Number(takeProfit) * 1000;

            pipsAnswerSlLong = epPipsValue - slPipsValue;
            pipsAnswerSlShort = slPipsValue - epPipsValue;
            pipsAnswerTPLong = tpPipsValue - epPipsValue;
            pipsAnswerTPShort = epPipsValue - tpPipsValue;

            // Going Short 
            if (position === "short") {
                setValueOfPipsSL(`SL = ${Number(pipsAnswerSlShort)}pips`);
                setValueOfPipsTP(`TP = ${Number(pipsAnswerTPShort)}pips`);
            }

            // Going Long 
            if (position === "long") {
                setValueOfPipsSL(`SL = ${Number(pipsAnswerSlLong)}pips`);
                setValueOfPipsTP(`TP = ${Number(pipsAnswerTPLong)}pips`);
            }

        }
  
    };
  
  return (
    <div className="display px-4 md:px-8 py-8" id="display">
      
      {/* MENU 6 */}
        <div className="atp" id="pipsContainer">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-center">
                pips calculation
            </h3>
            <div className="border-l-4 border-red-500 p-4 bg-gray-200 mt-4">
                <p>ALL FIELDS ARE REQUIRED</p>
            </div>
            <div className="mt-8" id="inputs6">
                <div>
                    <label for="currencyPairPips" className="text-xl mr-2">Currency Pair: </label> 
                    <select name="currencyPairPips" id="currencyPairPips" required value={currencyPair} onChange={handleChange1} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 ">
                        <option value="">select</option>
                        <option value="100000">Non-Yen Pair</option>
                        <option value="1000">Yen Pair</option>
                    </select>
                </div>
                <div>
                    <label for="positionPips" className="text-xl mr-2">Position: </label> 
                    <select name="positionPips" id="positionPips" required value={position} onChange={handleChange2} className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 ">
                        <option value="">select</option>
                        <option value="long">Long</option>
                        <option value="short">Short</option>
                    </select>
                </div>
                <div>
                    <label for="slPips" className="text-xl mr-2">Stop Loss: </label>
                    <input type="text" name="slPips" id="slPips" value={stopLoss} onChange={handleChange3} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder=" Example: 1.07845" />
                </div>
                <div>
                    <label for="tpPips" className="text-xl mr-2">Take Profit: </label>
                    <input type="text" name="tpPips" id="tpPips" value={takeProfit} onChange={handleChange4}  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder=" Example: 1.07231" />
                </div>
                <div>
                    <label for="epPips" className="text-xl mr-2">Entry Position: </label>
                    <input type="text" name="epPips" id="epPips" value={entryPosition} onChange={handleChange5} required  className="w-100-50 text-xl bg-gray-200 rounded-lg p-2 my-4 " placeholder=" Example: 1.07745" />
                </div>
                <div className="my-4">
                    <button className="md:w-100-70 py-2 px-8 my-2 rounded-lg font-bold text-2xl text-white" onClick={handleCalculate} id="calculateButton6">Calculate</button>
                    <button className=" py-2 px-8 my-2 ml-4 rounded-lg font-bold text-2xl text-white cursor-default" id="valueOfPipsSL">{valueOfPipsSL}</button>
                    <button className=" py-2 px-8 my-2 ml-4 rounded-lg font-bold text-2xl text-white cursor-default" id="valueOfPipsTP">{valueOfPipsTP}</button>
                </div>
            </div>
        </div>
        {/* END OF MENU 6 */}

    </div>
  )
}

export default PipsBox