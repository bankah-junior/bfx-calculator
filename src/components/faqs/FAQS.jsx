import React from 'react'

const FAQS = () => {
  return (
    
    <section className="faqs px-4 md:px-8 py-8" id="faqs">
      <h3 className="text-xl md:text-2xl font-bold uppercase text-center">frequently asked questions</h3>
      <ul className="mt-4">
        <li className="mb-4 border-b-2 border-gray-500 pb-4">
            <h5 className="text-xl font-bold capitalize mb-2">╞ what is "lot" in forex?</h5>
            <p className="">
                Forex is commonly traded in specific amounts called lots, or basically the number of 
                currency units you will buy or sell. A lot is a unit measuring a transaction. 
                The four main lots are <span className="font-semibold">"Standard : 100,000 : $10"</span>, 
                <span className="font-semibold">"Mini : 10,000 : $1"</span>,
                <span className="font-semibold">"Micro : 1,000 : $0.10"</span> 
                and <span className="font-semibold">"Nano : 100 : $0.01"</span>
            </p>
        </li>
        <li className="mb-4 border-b-2 border-gray-500 pb-4">
            <h5 className="text-xl font-bold capitalize mb-2">╞ what is "bid" and "ask"?</h5>
            <p className="">
                <span className="font-semibold">Bid</span> is the price at which your broker is willing to buy
                the base currency in exchange for the quote currency. <span className="font-semibold">Ask</span> 
                on the hand, is the price at which your broker is willing to sell the base currency in 
                exchange for the quote currency.
            </p>
        </li>
        <li className="mb-4 border-b-2 border-gray-500 pb-4">
            <h5 className="text-xl font-bold capitalize mb-2">╞ what is leverage?</h5>
            <p className="">
                Leverage is the ratio of the transaction size ("positive size") to the actual cash ("trading 
                capital") used for margin. For example, 50:1 leverage, also known as a 2% margin requirement, 
                means $2,000.00 of margin is required to open a position size worth $100,000.00
            </p>
        </li>
        <li className="mb-4 border-b-2 border-gray-500 pb-4">
            <h5 className="text-xl font-bold capitalize mb-2">╞ what is "pip" and "pipette"?</h5>
            <p className="">
                <span className="font-semibold">Pip</span> is the unit of measurement to express the change 
                in value between two currencies. A pip is usually the last decimal place of a quote.
                [4 and 2] <span className="font-semibold">Pipette</span> is as "PIP" just that it at the 
                [5 and 3] decimal place of a quote.
            </p>
        </li>
      </ul>
    </section>
  )
}

export default FAQS