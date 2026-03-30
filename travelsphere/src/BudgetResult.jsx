import React, { useState } from "react";
import "./Home.css";
import "./BudgetResult.css";
import Sidebar from "./Sidebar";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

function BudgetResult() {

  const [expenses, setExpenses] = useState([
    {
      title: "Accommodation",
      desc: "4 Rooms · ₹1500/night",
      amount: 40000,
      color: "#e74c3c"
    },
    {
      title: "Transport",
      desc: "Bus Travel · 300 km",
      amount: 9600,
      color: "#2ecc71"
    },
    {
      title: "Food & Activities",
      desc: "₹950/person · 4 travellers",
      amount: 17000,
      color: "#f1c40f"
    },
    {
      title: "Additional",
      desc: "Shopping & misc",
      amount: 12200,
      color: "#6c5ce7"
    }
  ]);

  const total = expenses.reduce((a, b) => a + b.amount, 0);
  const buffer = Math.round(total * 0.1);
  const finalTotal = total + buffer;

  const chartData = {
    labels: expenses.map(e => e.title),
    datasets: [
      {
        data: expenses.map(e => e.amount),
        backgroundColor: expenses.map(e => e.color),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="home">

      {/* SIDEBAR */}
      <Sidebar />

      <div className="main">

        {/* BANNER */}
        <div className="banner budget-banner">
          <div className="banner-overlay"></div>
          <div className="banner-text">
            <h1>Trip Budget Result</h1>
            <p>Smart breakdown of your travel expenses</p>
          </div>
        </div>

        <div className="content-area">

          {/* MAIN GLASS CONTAINER */}
          <div className="result-container">

            {/* TOP SECTION */}
            <div className="top-section">

              {/* CHART */}
              <div className="chart-card glass">
                <h3>Budget Summary</h3>

                <div className="chart-wrapper">
                  <Doughnut data={chartData} />
                  <div className="chart-center">
                    ₹ {total}
                    <span>Total</span>
                  </div>
                </div>
              </div>

              {/* SUMMARY */}
              <div className="summary-card glass">
                <h3>Budget Overview</h3>

                {expenses.map((e, i) => (
                  <div key={i} className="summary-row">
                    <span>{e.title}</span>
                    <span>₹ {e.amount}</span>
                  </div>
                ))}

                <div className="summary-row buffer">
                  <span>Buffer (10%)</span>
                  <span>₹ {buffer}</span>
                </div>

                <hr />

                <div className="summary-row total">
                  <span>Total</span>
                  <span>₹ {finalTotal}</span>
                </div>
              </div>

            </div>

            {/* EXPENSE LIST */}
            <div className="expense-section glass">

              <div className="section-header">
                <h3>Expense Breakdown</h3>
                <button className="add-btn">+ Add Expense</button>
              </div>

              {expenses.map((e, i) => (
                <div key={i} className="expense-card">

                  <div className="expense-left">
                    <div
                      className="color-dot"
                      style={{ background: e.color }}
                    ></div>

                    <div>
                      <h4>{e.title}</h4>
                      <p>{e.desc}</p>
                    </div>
                  </div>

                  <div className="expense-right">
                    ₹ {e.amount}
                    <div className="actions">
                      <button onClick={() => {}}>✏️</button>
                      <button onClick={() => setExpenses(expenses.filter((_, idx) => idx !== i))}>🗑️</button>
                    </div>
                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* STICKY FOOTER */}
        <div className="bottom-bar">
          <div className="trip-info">
            👥 4 Travellers &nbsp; | &nbsp; 📅 5 Days &nbsp; | &nbsp; 📍 16 Mar 2027
          </div>

          <div className="final-box">
            ₹ {finalTotal}
            <button className="confirm-btn">Confirm Budget</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default BudgetResult;