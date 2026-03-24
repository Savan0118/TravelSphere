import React, { useState } from "react";
import "./Home.css";
import "./BudgetResult.css";
import { useLocation, useNavigate } from "react-router-dom";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

import ChartDataLabels from "chartjs-plugin-datalabels";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

function BudgetResult() {

  const navigate = useNavigate();
  const location = useLocation();

  const { total } = location.state || { total: 0 };

  const [expenses, setExpenses] = useState([
    { category: "Accommodation", amount: total * 0.40, color: "#d10d0d" },
    { category: "Travel", amount: total * 0.25, color: "#34b85b" },
    { category: "Dining", amount: total * 0.20, color: "#b89e0b" },
    { category: "Activities", amount: total * 0.15, color: "#392fc4" }
  ]);

  const totalAmount = expenses.reduce((sum, item) => sum + item.amount, 0);

  const chartData = {
    labels: expenses.map(e => e.category),
    datasets: [
      {
        data: expenses.map(e => e.amount),
        backgroundColor: expenses.map(e => e.color),
        borderWidth: 0
      }
    ]
  };

  const chartOptions = {
    cutout: "65%",
    plugins: {
      legend: {
        position: "top"
      },
      datalabels: {
        color: "#fff",
        font: {
          weight: "bold",
          size: 14
        },
        formatter: (value) => {
          const percent = ((value / totalAmount) * 100).toFixed(2);
          return percent + "%";
        }
      }
    }
  };

  const handleEdit = (index) => {

    const value = prompt("Enter new amount");

    if (!value || isNaN(value)) return;

    const updated = [...expenses];
    updated[index].amount = Number(value);

    setExpenses(updated);
  };

  const handleDelete = (index) => {

    const updated = expenses.filter((_, i) => i !== index);
    setExpenses(updated);
  };

  return (

    <div className="home">

      <div className="sidebar">

        <div className="sidebar-top">

          <h2 className="logo">TravelSphere</h2>

          <p className="tagline">
            Discover. Plan. Experience.<br />
            Your gateway to unforgettable journeys
          </p>

          <ul className="menu">

            <li onClick={() => navigate("/home")}>
              <span style={{ fontSize: "18px" }}>🏠</span> Home
            </li>

            <li onClick={() => navigate("/search")}>
              <span style={{ fontSize: "18px" }}>🔍</span> Explore
            </li>

            <li onClick={() => navigate("/budget")}>
              <span style={{ fontSize: "18px" }}>💰</span> Budget Planner
            </li>

            <li onClick={() => navigate("/weather")}>
              <span style={{ fontSize: "18px" }}>🌦️</span> Weather
            </li>

          </ul>

        </div>

        <div className="logout-container">

          <div
            className="logout"
            onClick={() => navigate("/")}
          >
            <span style={{ fontSize: "20px" }}>⏻</span>
            Log Out
          </div>

        </div>

      </div>


      {/* MAIN */}
      <div className="main">

        <div className="banner budget-banner">

          <div className="banner-text">

            <h1>Budget Breakdown</h1>

            <p>Category wise analysis of your trip budget</p>

          </div>

          {/* ✅ ADDED PROFILE ICON */}
          <img
            className="profile"
            onClick={() => navigate("/profile")}
            style={{ cursor: "pointer" }}
          />

        </div>

        <div className="content-area">

          <div className="result-layout">

            <div className="chart-box">

              <Doughnut
                data={chartData}
                options={chartOptions}
              />

            </div>

            <div className="expense-cards">

              <h2>
                Total Budget : ₹ {totalAmount.toLocaleString()}
              </h2>

              {expenses.map((item, index) => {

                const percent = ((item.amount / totalAmount) * 100).toFixed(2);

                return (

                  <div key={index} className="expense-card">

                    <div className="expense-left">

                      <span
                        className="color-dot"
                        style={{ background: item.color }}
                      ></span>

                      <div>

                        <h4>{item.category}</h4>

                        <p>{percent}%</p>

                      </div>

                    </div>

                    <div className="expense-right">

                      ₹ {item.amount.toLocaleString()}

                      <div className="actions">

                        <button onClick={() => handleEdit(index)}>✏️</button>

                        <button onClick={() => handleDelete(index)}>🗑</button>

                      </div>

                    </div>

                  </div>

                );

              })}

              <button
                className="back-btn"
                onClick={() => navigate("/budget")}
              >
                Back
              </button>

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}

export default BudgetResult;