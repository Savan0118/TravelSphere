import React, { useState, useEffect } from "react";
import "./Home.css";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import { ChevronLeft, ChevronRight, Bell } from "lucide-react";

const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

// Mock Trips data mapped to current month for demonstration
const currentYear = new Date().getFullYear();
const currentMonth = new Date().getMonth();

const mockTrips = [
  { id: "ladakh", title: "Ladakh Expedition", start: 15, end: 21, color: "rgba(42, 129, 83, 0.8)", desc: "Adventure in the mountains" },
  { id: "varanasi", title: "Varanasi Spiritual", start: 5, end: 9, color: "rgba(231, 76, 60, 0.8)", desc: "Peaceful spiritual journey" },
];

function CalendarView() {
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());
  const [selectedDateTrip, setSelectedDateTrip] = useState(null);

  const profileImg = localStorage.getItem("profileImage") || "https://cdn-icons-png.flaticon.com/512/3135/3135715.png";
  const [notifications, setNotifications] = useState(JSON.parse(localStorage.getItem("notifications") || "[]"));
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const handleStorageChange = () => {
      setNotifications(JSON.parse(localStorage.getItem("notifications") || "[]"));
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const markAllRead = () => {
    localStorage.setItem("notifications", "[]");
    setNotifications([]);
    setShowDropdown(false);
  };

  const year = date.getFullYear();
  const month = date.getMonth();

  const daysInMonth = getDaysInMonth(year, month);
  const startDay = getFirstDayOfMonth(year, month);
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const prevMonth = () => setDate(new Date(year, month - 1, 1));
  const nextMonth = () => setDate(new Date(year, month + 1, 1));

  const handleDayClick = (day) => {
    // Only highlight if it's the current demonstrated month
    if (year === currentYear && month === currentMonth) {
      const trip = mockTrips.find(t => day >= t.start && day <= t.end);
      if (trip) setSelectedDateTrip(trip);
      else setSelectedDateTrip(null);
    } else {
      setSelectedDateTrip(null);
    }
  };

  const getDayStyle = (day) => {
    let baseStyle = { 
      padding: '15px', 
      minHeight: '80px',
      border: '1px solid rgba(0,0,0,0.05)', 
      borderRadius: '8px',
      cursor: 'pointer',
      display: 'flex',
      flexDirection: 'column',
      fontWeight: 'bold',
      background: 'var(--bg-card)'
    };
    
    if (year === currentYear && month === currentMonth) {
      const trip = mockTrips.find(t => day >= t.start && day <= t.end);
      if (trip) {
        baseStyle.background = trip.color;
        baseStyle.color = 'white';
        baseStyle.border = 'none';
      }
    }
    return baseStyle;
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="main">
        <div className="banner">
          <div className="banner-text">
            <h1>Travel Calendar</h1>
            <p>View your upcoming and ongoing trips at a glance.</p>
          </div>

          <div style={{ position: 'absolute', right: '30px', top: '30px', display: 'flex', alignItems: 'center', gap: '20px', zIndex: 2 }}>
            <div style={{ position: 'relative', cursor: 'pointer' }} onClick={() => setShowDropdown(!showDropdown)}>
              <Bell size={28} color="var(--text-main)" />
              {notifications.length > 0 && (
                <span style={{ position: 'absolute', top: -5, right: -5, background: 'red', color: 'white', borderRadius: '50%', padding: '2px 6px', fontSize: '10px', fontWeight: 'bold' }}>
                  {notifications.length}
                </span>
              )}
              {showDropdown && (
                <div className="glass" style={{ position: 'absolute', top: '40px', right: 0, width: '250px', padding: '15px', borderRadius: '10px', background: 'var(--bg-dropdown)', boxShadow: '0 4px 15px rgba(0,0,0,0.2)', zIndex: 10 }}>
                  <h4 style={{ margin: '0 0 10px 0', color: 'var(--text-main)' }}>Notifications</h4>
                  {notifications.length === 0 ? <p style={{ fontSize: '12px', color: 'var(--text-muted)', margin: 0 }}>No new notifications.</p> :
                    notifications.map((n, i) => (
                      <div key={i} style={{ padding: '8px 0', borderBottom: '1px solid var(--border-color)', fontSize: '12px', color: 'var(--text-main)' }}>{n.msg}</div>
                    ))
                  }
                  {notifications.length > 0 && <button onClick={markAllRead} style={{ marginTop: '10px', width: '100%', padding: '5px', background: '#2a8153', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Mark all as read</button>}
                </div>
              )}
            </div>
            <img src={profileImg} className="profile" style={{ position: 'static', margin: 0 }} onClick={() => navigate("/profile")} />
          </div>
        </div>

        <div className="content-area" style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
          
          <div className="glass" style={{ flex: 2, padding: '20px', borderRadius: '15px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <button onClick={prevMonth} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}><ChevronLeft /></button>
              <h2 style={{ margin: 0 }}>{monthNames[month]} {year}</h2>
              <button onClick={nextMonth} style={{ background: 'transparent', border: 'none', cursor: 'pointer', color: 'var(--text-main)' }}><ChevronRight /></button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', textAlign: 'center', fontWeight: 'bold', marginBottom: '10px', color: 'var(--text-muted)' }}>
              <div>Sun</div><div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px' }}>
              {Array.from({ length: startDay }).map((_, i) => <div key={`empty-${i}`} />)}
              {Array.from({ length: daysInMonth }).map((_, i) => {
                const day = i + 1;
                const trip = year === currentYear && month === currentMonth ? mockTrips.find(t => day >= t.start && day <= t.end) : null;
                const isStart = trip && day === trip.start;

                return (
                  <div key={day} style={getDayStyle(day)} onClick={() => handleDayClick(day)}>
                    <span>{day}</span>
                    {isStart && <span style={{ fontSize: '10px', marginTop: 'auto', fontWeight: 'normal', background: 'rgba(0,0,0,0.3)', padding: '2px 4px', borderRadius: '4px' }}>{trip.title}</span>}
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {selectedDateTrip ? (
              <div className="glass" style={{ padding: '20px', borderRadius: '15px', background: selectedDateTrip.color, color: 'white' }}>
                <h3 style={{ marginTop: 0 }}>{selectedDateTrip.title}</h3>
                <p style={{ fontSize: '14px' }}><strong>Dates:</strong> {monthNames[month]} {selectedDateTrip.start} - {selectedDateTrip.end}, {year}</p>
                <p style={{ fontSize: '13px', lineHeight: '1.4' }}>{selectedDateTrip.desc}</p>
                <button onClick={() => navigate(`/trip-details/${selectedDateTrip.id}`)} style={{ width: '100%', marginTop: '15px', padding: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', borderRadius: '8px', color: 'white', cursor: 'pointer', fontWeight: 'bold' }}>
                  View Trip Details
                </button>
              </div>
            ) : (
              <div className="glass" style={{ padding: '20px', borderRadius: '15px', textAlign: 'center', color: 'var(--text-muted)' }}>
                <Bell size={32} style={{ marginBottom: '10px', opacity: 0.5 }} />
                <h3>No Trips Selected</h3>
                <p style={{ fontSize: '14px' }}>Click on a highlighted date in the calendar to view trip details and timeline.</p>
              </div>
            )}
            
            <div className="glass" style={{ padding: '20px', borderRadius: '15px' }}>
              <h4 style={{ marginTop: 0, marginBottom: '10px' }}>Legend</h4>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px', fontSize: '13px' }}>
                <div style={{ width: '15px', height: '15px', background: 'rgba(42, 129, 83, 0.8)', borderRadius: '4px' }}></div> Mountain Trips
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '13px' }}>
                <div style={{ width: '15px', height: '15px', background: 'rgba(231, 76, 60, 0.8)', borderRadius: '4px' }}></div> Cultural Trips
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default CalendarView;
