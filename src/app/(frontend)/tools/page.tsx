"use client"

import React, { useState } from 'react'
import Link from 'next/link'

export default function ToolsPage() {
  const [activeTab, setActiveTab] = useState<'emi' | 'sip' | 'delay' | 'goal'>('emi')

  // EMI Calculator State
  const [emiPrincipal, setEmiPrincipal] = useState(600000)
  const [emiRate, setEmiRate] = useState(11) // 11%
  const [emiTenor, setEmiTenor] = useState(36) // 36 months

  // SIP Calculator State
  const [sipMonthly, setSipMonthly] = useState(10000)
  const [sipRate, setSipRate] = useState(12) // 12%
  const [sipTenure, setSipTenure] = useState(15) // 15 years
  const [isLumpSum, setIsLumpSum] = useState(false)

  // SIP Delay State
  const [delayMonthly, setDelayMonthly] = useState(10000)
  const [delayRate, setDelayRate] = useState(12)
  const [delayTenure, setDelayTenure] = useState(15)
  const [delayMonths, setDelayMonths] = useState(6) // 6 months delay

  // Goal Planner State
  const [goalTarget, setGoalTarget] = useState(5000000) // 50 Lakh
  const [goalRate, setGoalRate] = useState(12)
  const [goalTenure, setGoalTenure] = useState(10) // 10 years

  // --- EMI CALCULATIONS ---
  const calculateEMI = () => {
    const P = emiPrincipal
    const r = emiRate / 12 / 100
    const n = emiTenor
    if (r === 0) return P / n
    const emiVal = (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1)
    return Math.round(emiVal)
  }

  const emiAmount = calculateEMI()
  const totalEmiPayment = emiAmount * emiTenor
  const totalEmiInterest = totalEmiPayment - emiPrincipal

  const generateAmortizationSchedule = () => {
    const schedule = []
    let balance = emiPrincipal
    const r = emiRate / 12 / 100
    let cumulativePrincipal = 0
    let cumulativeInterest = 0

    for (let month = 1; month <= emiTenor; month++) {
      const interestThisMonth = balance * r
      const principalThisMonth = emiAmount - interestThisMonth
      cumulativePrincipal += principalThisMonth
      cumulativeInterest += interestThisMonth
      balance -= principalThisMonth

      schedule.push({
        month,
        principal: Math.round(principalThisMonth),
        interest: Math.round(interestThisMonth),
        cumPrincipal: Math.round(cumulativePrincipal),
        cumInterest: Math.round(cumulativeInterest),
        balance: Math.max(0, Math.round(balance)),
      })
    }
    return schedule
  }

  const emiSchedule = generateAmortizationSchedule()

  // --- SIP / LUMP SUM CALCULATIONS ---
  const calculateSIPWealth = () => {
    const rateFraction = sipRate / 12 / 100
    const months = sipTenure * 12
    if (isLumpSum) {
      const finalValue = sipMonthly * Math.pow(1 + sipRate / 100, sipTenure)
      const invested = sipMonthly
      const returns = finalValue - invested
      return { finalValue: Math.round(finalValue), invested, returns: Math.round(returns) }
    } else {
      // SIP Formula: P * [ ( (1 + r)^n - 1 ) / r ] * (1 + r)
      const finalValue = sipMonthly * ((Math.pow(1 + rateFraction, months) - 1) / rateFraction) * (1 + rateFraction)
      const invested = sipMonthly * months
      const returns = finalValue - invested
      return { finalValue: Math.round(finalValue), invested, returns: Math.round(returns) }
    }
  }

  const sipResults = calculateSIPWealth()

  // --- SIP DELAY CALCULATIONS ---
  const calculateDelayCost = () => {
    const rateFraction = delayRate / 12 / 100
    const totalMonths = delayTenure * 12
    const delayedMonths = Math.max(0, totalMonths - delayMonths)

    // Scenario A: Invested immediately
    const wealthNoDelay = delayMonthly * ((Math.pow(1 + rateFraction, totalMonths) - 1) / rateFraction) * (1 + rateFraction)
    
    // Scenario B: Delayed starting
    const wealthDelayed = delayMonthly * ((Math.pow(1 + rateFraction, delayedMonths) - 1) / rateFraction) * (1 + rateFraction)

    const costOfDelay = wealthNoDelay - wealthDelayed
    return {
      noDelay: Math.round(wealthNoDelay),
      delayed: Math.round(wealthDelayed),
      cost: Math.round(costOfDelay),
    }
  }

  const delayResults = calculateDelayCost()

  // --- GOAL PLANNER CALCULATIONS ---
  const calculateGoalSIP = () => {
    const rateFraction = goalRate / 12 / 100
    const months = goalTenure * 12
    // SIP required: Target / [ ( (1 + r)^n - 1 ) / r * (1 + r) ]
    const denominator = ((Math.pow(1 + rateFraction, months) - 1) / rateFraction) * (1 + rateFraction)
    const requiredSIP = goalTarget / denominator
    return Math.round(requiredSIP)
  }

  const requiredGoalSIP = calculateGoalSIP()

  return (
    <main className="min-h-screen bg-[#f6f3f3] py-16 px-4 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title Block */}
        <section className="text-center space-y-4">
          <div className="text-sm font-semibold tracking-wider text-[#00acb7] uppercase">
            <Link href="/" className="hover:underline">Home</Link> &gt; Tools
          </div>
          <h1 className="font-['DM_Serif_Display'] text-5xl md:text-6xl text-[#014865]">
            Tools &amp; Calculators
          </h1>
          <p className="max-w-xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
            Estimate return percentages, delays, goal corpuses, and loan payment schedules instantly.
          </p>
        </section>

        {/* Tab Controls */}
        <section className="flex flex-wrap items-center justify-center gap-4 bg-white p-2 rounded-full shadow-[0px_4px_20px_rgba(0,0,0,0.02)] border border-gray-100 max-w-2xl mx-auto">
          <button
            onClick={() => setActiveTab('emi')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'emi' ? 'bg-[#00728a] text-white shadow-md' : 'text-gray-600 hover:text-[#00acb7]'}`}
          >
            EMI Calculator
          </button>
          <button
            onClick={() => setActiveTab('sip')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'sip' ? 'bg-[#00728a] text-white shadow-md' : 'text-gray-600 hover:text-[#00acb7]'}`}
          >
            SIP / Lump Sum
          </button>
          <button
            onClick={() => setActiveTab('delay')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'delay' ? 'bg-[#00728a] text-white shadow-md' : 'text-gray-600 hover:text-[#00acb7]'}`}
          >
            SIP Delay Cost
          </button>
          <button
            onClick={() => setActiveTab('goal')}
            className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all ${activeTab === 'goal' ? 'bg-[#00728a] text-white shadow-md' : 'text-gray-600 hover:text-[#00acb7]'}`}
          >
            Goal Planner
          </button>
        </section>

        {/* Tab Contents */}
        <section className="bg-white rounded-[40px] p-6 md:p-12 shadow-[0px_10px_30px_rgba(0,0,0,0.03)] border border-gray-100 max-w-5xl mx-auto">
          
          {/* TAB 1: EMI CALCULATOR */}
          {activeTab === 'emi' && (
            <div className="space-y-12">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div className="space-y-8">
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">Loan EMI Calculator</h2>
                  
                  {/* Principal Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                      <span>Loan Amount</span>
                      <span className="text-[#00728a]">₹ {emiPrincipal.toLocaleString('en-IN')}</span>
                    </div>
                    <input
                      type="range"
                      min="50000"
                      max="10000000"
                      step="50000"
                      value={emiPrincipal}
                      onChange={(e) => setEmiPrincipal(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                    />
                  </div>

                  {/* Rate Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                      <span>Interest Rate (p.a.)</span>
                      <span className="text-[#00728a]">{emiRate} %</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="20"
                      step="0.25"
                      value={emiRate}
                      onChange={(e) => setEmiRate(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                    />
                  </div>

                  {/* Tenor Slider */}
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-semibold text-gray-700">
                      <span>Tenure (Months)</span>
                      <span className="text-[#00728a]">{emiTenor} Months</span>
                    </div>
                    <input
                      type="range"
                      min="6"
                      max="120"
                      step="6"
                      value={emiTenor}
                      onChange={(e) => setEmiTenor(Number(e.target.value))}
                      className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                    />
                  </div>
                </div>

                {/* Outputs Panel */}
                <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 flex flex-col justify-center border border-gray-200">
                  <div className="text-center space-y-1">
                    <span className="text-gray-500 text-sm font-medium uppercase">Equated Monthly Instalment</span>
                    <div className="text-4xl font-extrabold text-[#00728a]">
                      ₹ {emiAmount.toLocaleString('en-IN')} / Mo
                    </div>
                  </div>
                  <div className="border-t border-gray-200 my-4"></div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <span className="text-gray-500 text-xs uppercase block">Total Principal</span>
                      <span className="font-semibold text-gray-800 text-sm">₹ {emiPrincipal.toLocaleString('en-IN')}</span>
                    </div>
                    <div>
                      <span className="text-gray-500 text-xs uppercase block">Total Interest</span>
                      <span className="font-semibold text-gray-800 text-sm">₹ {totalEmiInterest.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                  <div className="bg-[#014865] text-white p-4 rounded-xl text-center font-semibold text-sm">
                    Total Amount: ₹ {totalEmiPayment.toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              {/* Amortization Schedule */}
              <div className="space-y-4">
                <h3 className="font-['DM_Serif_Display'] text-2xl text-[#014865]">Amortization Schedule</h3>
                <div className="overflow-x-auto border border-gray-100 rounded-2xl max-h-[350px]">
                  <table className="w-full text-left border-collapse text-sm text-gray-600">
                    <thead className="bg-[#f6f3f3] text-gray-800 sticky top-0">
                      <tr>
                        <th className="p-4 border-b border-gray-200">Month No</th>
                        <th className="p-4 border-b border-gray-200">Principal Paid</th>
                        <th className="p-4 border-b border-gray-200">Interest Paid</th>
                        <th className="p-4 border-b border-gray-200">Cum. Principal</th>
                        <th className="p-4 border-b border-gray-200">Cum. Interest</th>
                        <th className="p-4 border-b border-gray-200">Remaining Bal.</th>
                      </tr>
                    </thead>
                    <tbody>
                      {emiSchedule.slice(0, 12).map((row) => (
                        <tr key={row.month} className="hover:bg-gray-50/50 border-b border-gray-100">
                          <td className="p-4 font-semibold">{row.month}</td>
                          <td className="p-4">₹ {row.principal.toLocaleString('en-IN')}</td>
                          <td className="p-4">₹ {row.interest.toLocaleString('en-IN')}</td>
                          <td className="p-4">₹ {row.cumPrincipal.toLocaleString('en-IN')}</td>
                          <td className="p-4">₹ {row.cumInterest.toLocaleString('en-IN')}</td>
                          <td className="p-4 font-semibold text-gray-800">₹ {row.balance.toLocaleString('en-IN')}</td>
                        </tr>
                      ))}
                      {emiSchedule.length > 12 && (
                        <tr>
                          <td colSpan={6} className="p-4 text-center text-gray-400 italic bg-[#f6f3f3]/10">
                            Showing first 12 months. Total schedules generated: {emiSchedule.length} months.
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: SIP & LUMP SUM CALCULATOR */}
          {activeTab === 'sip' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <div className="flex justify-between items-center">
                  <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">SIP / Wealth Calculator</h2>
                  <div className="flex bg-[#f6f3f3] rounded-full p-1 border border-gray-200">
                    <button
                      onClick={() => setIsLumpSum(false)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${!isLumpSum ? 'bg-[#00728a] text-white' : 'text-gray-500'}`}
                    >
                      Monthly SIP
                    </button>
                    <button
                      onClick={() => setIsLumpSum(true)}
                      className={`px-4 py-1.5 rounded-full text-xs font-bold transition-all ${isLumpSum ? 'bg-[#00728a] text-white' : 'text-gray-500'}`}
                    >
                      Lump Sum
                    </button>
                  </div>
                </div>

                {/* Amount Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>{isLumpSum ? 'Lump Sum Investment' : 'Monthly SIP Amount'}</span>
                    <span className="text-[#00728a]">₹ {sipMonthly.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min={isLumpSum ? "5000" : "500"}
                    max={isLumpSum ? "1000000" : "100000"}
                    step={isLumpSum ? "5000" : "500"}
                    value={sipMonthly}
                    onChange={(e) => setSipMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>

                {/* Return Rate Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Expected Return (p.a.)</span>
                    <span className="text-[#00728a]">{sipRate} %</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="22"
                    step="0.5"
                    value={sipRate}
                    onChange={(e) => setSipRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>

                {/* Tenure Slider */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Investment Period</span>
                    <span className="text-[#00728a]">{sipTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="40"
                    step="1"
                    value={sipTenure}
                    onChange={(e) => setSipTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>
              </div>

              {/* Wealth Output Panel */}
              <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 flex flex-col justify-center border border-gray-200">
                <div className="text-center space-y-1">
                  <span className="text-gray-500 text-xs font-semibold uppercase block">Total Estimated Wealth</span>
                  <div className="text-4xl font-extrabold text-[#00728a]">
                    ₹ {sipResults.finalValue.toLocaleString('en-IN')}
                  </div>
                </div>
                <div className="border-t border-gray-200 my-4"></div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">Invested Capital</span>
                    <span className="font-semibold text-gray-800 text-sm">₹ {sipResults.invested.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">Estimated Returns</span>
                    <span className="font-semibold text-green-600 text-sm">₹ {sipResults.returns.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: SIP DELAY COST CALCULATOR */}
          {activeTab === 'delay' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">SIP Delay Cost Calculator</h2>
                
                {/* Delay Amount */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Monthly SIP Amount</span>
                    <span className="text-[#00728a]">₹ {delayMonthly.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={delayMonthly}
                    onChange={(e) => setDelayMonthly(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>

                {/* Delay Months */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Delay Period</span>
                    <span className="text-red-500">{delayMonths} Months</span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="36"
                    step="1"
                    value={delayMonths}
                    onChange={(e) => setDelayMonths(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-red-500"
                  />
                </div>

                {/* Tenure */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Investment Period</span>
                    <span className="text-[#00728a]">{delayTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="30"
                    step="1"
                    value={delayTenure}
                    onChange={(e) => setDelayTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>
              </div>

              {/* Delay Results Outputs */}
              <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 flex flex-col justify-center border border-gray-200">
                <div className="text-center space-y-1 bg-red-50 p-4 rounded-xl border border-red-100">
                  <span className="text-red-500 text-xs font-semibold uppercase block">Cost of Delaying</span>
                  <div className="text-3xl font-extrabold text-red-600">
                    - ₹ {delayResults.cost.toLocaleString('en-IN')}
                  </div>
                  <p className="text-[10px] text-gray-500 pt-1">The value lost by delaying your SIP for {delayMonths} months.</p>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center pt-2">
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">No Delay Wealth</span>
                    <span className="font-semibold text-gray-800 text-sm">₹ {delayResults.noDelay.toLocaleString('en-IN')}</span>
                  </div>
                  <div>
                    <span className="text-gray-500 text-xs uppercase block">Delayed Wealth</span>
                    <span className="font-semibold text-gray-800 text-sm">₹ {delayResults.delayed.toLocaleString('en-IN')}</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: GOAL PLANNER */}
          {activeTab === 'goal' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="space-y-8">
                <h2 className="font-['DM_Serif_Display'] text-3xl text-[#014865]">Life Goal Planner</h2>
                
                {/* Target Amount */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Target Goal Amount</span>
                    <span className="text-[#00728a]">₹ {goalTarget.toLocaleString('en-IN')}</span>
                  </div>
                  <input
                    type="range"
                    min="100000"
                    max="50000000"
                    step="100000"
                    value={goalTarget}
                    onChange={(e) => setGoalTarget(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>

                {/* Years left */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Years Left to Achieve Goal</span>
                    <span className="text-[#00728a]">{goalTenure} Years</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="35"
                    step="1"
                    value={goalTenure}
                    onChange={(e) => setGoalTenure(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>

                {/* Returns rate */}
                <div className="space-y-3">
                  <div className="flex justify-between text-sm font-semibold text-gray-700">
                    <span>Expected Returns (p.a.)</span>
                    <span className="text-[#00728a]">{goalRate} %</span>
                  </div>
                  <input
                    type="range"
                    min="5"
                    max="22"
                    step="0.5"
                    value={goalRate}
                    onChange={(e) => setGoalRate(Number(e.target.value))}
                    className="w-full h-2 bg-gray-100 rounded-lg appearance-none cursor-pointer accent-[#00acb7]"
                  />
                </div>
              </div>

              {/* Goal output */}
              <div className="bg-[#f6f3f3] p-8 rounded-3xl space-y-6 flex flex-col justify-center border border-gray-200">
                <div className="text-center space-y-2">
                  <span className="text-gray-500 text-xs font-semibold uppercase block">Required Monthly Investment</span>
                  <div className="text-4xl font-extrabold text-[#00728a]">
                    ₹ {requiredGoalSIP.toLocaleString('en-IN')} / Mo
                  </div>
                  <p className="text-xs text-gray-500 max-w-xs mx-auto leading-relaxed pt-2">
                    Invest this amount monthly at an expected return of {goalRate}% p.a. to accumulate your target goal of ₹ {goalTarget.toLocaleString('en-IN')} in {goalTenure} years.
                  </p>
                </div>
              </div>
            </div>
          )}

        </section>

      </div>
    </main>
  )
}
