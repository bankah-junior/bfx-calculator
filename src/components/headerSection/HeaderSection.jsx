import React from 'react'
import { Link } from 'react-router-dom'

const HeaderSection = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <section className="hero w-full h-screen-50" id="home">
          <div className="hero-cover w-full h-full">
              <div className="w-full h-full flex flex-col justify-center items-center relative" style={{bottom: "10%"}}>
                  <h1 className="text-4xl md:text-6xl font-bold text-white">BFX_CALCULATOR</h1>
                  <h3 className="text-lg md:text-2xl font-semibold text-white capitalize">
                    Online forex calculator
                  </h3>
                  <a href="https://bankidev.netlify.app/" target="_blank" rel='noreferrer' className="rounded-full bg-white p-2 mt-4 text-sm font-semibold">
                    ABOUT AUTHOR
                  </a>
              </div>
          </div>
      </section>
      {/* END OF HERO SECTION */}

      {/* MENU SECTION */}
      <section className="menu w-full h-screen-50 relative border-t-2 border-white" id="menu">
          <ul className="bg-white w-100-20 flex flex-col md:flex-row justify-between absolute left-100-90 md:top-90-100 top-70-100 text-center rounded-lg" id="menuUL">
              <Link to="/atp"><li className="md:p-8 p-4 relative md:rounded-lg">AMOUNT TO PIPS</li></Link>
              <Link to="/pta"><li className="md:p-8 p-4 relative md:rounded-lg">PIPS TO AMOUNT</li></Link>
              <Link to="/rm"><li className="md:p-8 p-4 relative md:rounded-lg">RISK MANAGEMENT</li></Link>
              <Link to="/sl"><li className="md:p-8 p-4 relative md:rounded-lg">STOP LOSS</li></Link>
              <Link to="/tp"><li className="md:p-8 p-4 relative md:rounded-lg">TAKE PROFIT</li></Link>
              <Link to="/pips"><li className="md:p-8 p-4 relative md:rounded-lg">PIPS</li></Link>
          </ul>
      </section>
      {/* END OF MENU SECTION */}
    </div>
  )
}

export default HeaderSection