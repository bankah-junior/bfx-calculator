import React from 'react'

const AboutBox = () => {
  return (
    <div className="display px-4 md:px-8 py-8">
        <div className="w-full h-full border-4 border-blue-600 p-4">
            <h3 className="text-2xl md:text-5xl font-semibold uppercase text-center">About BFX_CALCULATOR</h3>
            <p className='mt-2 text-lg'>
                BFX_CALCULATOR is a forex calculator which has been designed to make trading easy. 
                With this calculator you can perform your calculations for <b>free</b>. It contains 
                most frequently used stuffs. Below are what this calculator entails:
            </p>
            <ul className='mt-4 text-lg'>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING AMOUNT TO PIPS:</u> </b>
                    With this menu, you are to select your <b>lot size</b>, the type of <b>currency pair</b>, the <b>exchange rate </b> 
                    (Ask or Bid), your <b>total amount</b> (the amount you will place in the trade) and 
                    <b> percentage of your total amount</b> (in case you want to use some fraction/percentage of your amount else
                     leave that field)
                </li>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING PIPS TO AMOUNT:</u> </b>
                    With this menu, you are to select your <b>lot size</b>, the type of <b>currency pair</b>, the <b>exchange rate </b> 
                    (Ask or Bid) and the pips you want to calculate.
                </li>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING RISK MANAGEMENT:</u> </b>
                    With this menu, you will be able to calculate your <b>position size</b>. Provide your <b>risk tolerance </b>
                    (amount you want to put in), <b>percentage of risk tolerance</b> (in case you want to use some fraction/percentage 
                    of your amount else leave that field). It is advised to risk from 1% to 2% of you risk tolerance. And your 
                    <b> stop loss</b> in pips.
                </li>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING STOP LOSS:</u> </b>
                    With this menu, you will be able to calculate your <b>stop loss</b>. Note. when going <b>long</b> leave the bid field 
                    and when going <b>short</b> leave the ask field. All other field are relevant.
                </li>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING TAKE PROFIT:</u> </b>
                    With this menu, you will be able to calculate your <b>take profit</b>. Note. when going <b>long</b> leave the bid field 
                    and when going <b>short</b> leave the ask field. All other field are relevant.
                </li>
                <li className='mb-4 card p-4'>
                    ▌<b><u>CALCULATING PIPS:</u> </b>
                    With this menu, you will compute your pips. Fill and fields and your <b>pips</b> will be computed for you in 
                    <b> stop loss</b> and <b>take profit</b>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default AboutBox