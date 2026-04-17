import React, { useState, useEffect } from "react";
import "./Home.css";
import "./TripDetails.css";
import Sidebar from "./Sidebar";
import { useParams, useNavigate } from "react-router-dom";
import { Star, Upload, Trash, User, Bell } from "lucide-react";

function TripDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const trips = {
    ladakh: { title: "Ladakh Expedition", location: "Leh, Ladakh", status: "Upcoming", dates: "15 Apr 2024 — 21 Apr 2024", travellers: 5, type: "Family Trip", price: "₹70,000", image: "/Images/ladakh.png", hotel: "The Grand Dragon Ladakh", transport: "Flight + SUV", notes: "Carry warm clothes and ID proof." },
    varanasi: { title: "Varanasi Spiritual Tour", location: "Varanasi, Uttar Pradesh", status: "Upcoming", dates: "2 May 2024 — 6 May 2024", travellers: 4, type: "Friends Trip", price: "₹25,000", image: "/Images/varanasi.png", hotel: "Ganges View Hotel", transport: "Train + Local Auto", notes: "Attend Ganga Aarti in evening." },
    taj: { title: "Taj Mahal Visit", location: "Agra, Uttar Pradesh", status: "Completed", dates: "15 Jan 2025 — 22 Jan 2025", travellers: 1, type: "Solo Trip", price: "₹15,000", image: "/Images/taj_mahal.jpeg", hotel: "Radisson Agra", transport: "Train", notes: "Visited at sunrise." }
  };

  const [photos, setPhotos] = useState(() => JSON.parse(localStorage.getItem(`photos_${id}`) || "[]"));
  const [reviews, setReviews] = useState(() => JSON.parse(localStorage.getItem(`reviews_${id}`) || "[]"));
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [ratingInput, setRatingInput] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [commentInput, setCommentInput] = useState("");

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

  const data = trips[id];



  if (!data) return <h2 style={{ padding: "40px" }}>Trip Not Found</h2>;

  const handlePhotoUpload = (e) => {
    const files = Array.from(e.target.files);
    files.forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhotos(prev => {
          const updated = [...prev, reader.result];
          localStorage.setItem(`photos_${id}`, JSON.stringify(updated));
          return updated;
        });
      };
      if (file) reader.readAsDataURL(file);
    });
  };

  const deletePhoto = (idx) => {
    const updated = photos.filter((_, i) => i !== idx);
    setPhotos(updated);
    localStorage.setItem(`photos_${id}`, JSON.stringify(updated));
  };

  const submitReview = () => {
    if (ratingInput === 0) return alert("Select a rating first!");
    const newReview = { name: "Harish Patel", rating: ratingInput, comment: commentInput, date: new Date().toLocaleDateString() };
    const updated = [newReview, ...reviews];
    setReviews(updated);
    localStorage.setItem(`reviews_${id}`, JSON.stringify(updated));
    setShowReviewForm(false);
    setRatingInput(0);
    setCommentInput("");
  };

  return (
    <div className="home">
      <Sidebar />
      <div className="main trip-scroll">
        <div className="banner" style={{ backgroundImage: `url(${data.image})` }}>
          <div className="banner-text">
            <h1>{data.title}</h1>
            <p>{data.location}</p>
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

        <div className="content-area">
          <div className="trip-card-detail">
            <div className="trip-header">
              <h2>{data.title}</h2>
              <span className={`status ${data.status.toLowerCase()}`}>{data.status}</span>
            </div>
            <p><strong>📅 Dates:</strong> {data.dates}</p>
            <p><strong>📍 Location:</strong> {data.location}</p>
            <p><strong>👥 Travellers:</strong> {data.travellers}</p>
            <p><strong>🧳 Trip Type:</strong> {data.type}</p>
            <hr />
            <p><strong>🏨 Hotel:</strong> {data.hotel}</p>
            <p><strong>🚘 Transport:</strong> {data.transport}</p>
            <p className="note">📝 {data.notes}</p>
            <div className="price-box">{data.price}</div>

            <div className="action-buttons">
              {data.status === "Upcoming" ? (
                <button className="cancel-btn">Cancel Trip</button>
              ) : (
                <button className="review-btn" onClick={() => setShowReviewForm(!showReviewForm)}>
                  Write Review
                </button>
              )}
              <button className="back-btn" onClick={() => navigate("/journeys")}>← Back</button>
            </div>
          </div>

          {/* REVIEWS SECTION */}
          {data.status === "Completed" && (
            <div className="glass" style={{ padding: '20px', borderRadius: '15px', marginTop: '20px' }}>
              <h3>Ratings & Reviews</h3>
              
              {showReviewForm && (
                <div style={{ marginBottom: '20px', padding: '15px', background: 'rgba(0,0,0,0.05)', borderRadius: '10px' }}>
                  <h4>Leave a Review</h4>
                  <div style={{ display: 'flex', gap: '5px', marginBottom: '10px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star 
                        key={star} 
                        size={24} 
                        fill={(hoverRating || ratingInput) >= star ? "#ffc107" : "transparent"} 
                        color={(hoverRating || ratingInput) >= star ? "#ffc107" : "gray"}
                        onMouseEnter={() => setHoverRating(star)} 
                        onMouseLeave={() => setHoverRating(0)} 
                        onClick={() => setRatingInput(star)} 
                        style={{ cursor: 'pointer', transition: '0.2s' }} 
                      />
                    ))}
                  </div>
                  <textarea 
                    placeholder="Share your experience..." 
                    value={commentInput} 
                    onChange={e => setCommentInput(e.target.value)} 
                    style={{ width: '100%', height: '80px', padding: '10px', borderRadius: '8px', border: '1px solid #ccc', marginBottom: '10px', background: 'transparent', color: 'inherit' }}
                  />
                  <div style={{ display: 'flex', gap: '10px' }}>
                    <button onClick={submitReview} style={{ padding: '8px 15px', background: '#2a8153', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Submit</button>
                    <button onClick={() => setShowReviewForm(false)} style={{ padding: '8px 15px', background: '#e74c3c', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
                  </div>
                </div>
              )}

              {reviews.length === 0 && !showReviewForm ? <p style={{ color: 'var(--text-muted)' }}>No reviews yet. Be the first to share!</p> : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                  {reviews.map((r, i) => (
                    <div key={i} style={{ padding: '15px', borderRadius: '10px', background: 'var(--bg-glass)', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 'bold' }}>
                          <User size={16} /> {r.name}
                        </div>
                        <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{r.date}</span>
                      </div>
                      <div style={{ color: '#ffc107', marginBottom: '8px' }}>
                        {"★".repeat(r.rating)}{"☆".repeat(5-r.rating)}
                      </div>
                      <p style={{ margin: 0, fontSize: '14px', color: 'var(--text-main)' }}>{r.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* PHOTO GALLERY */}
          <div className="glass" style={{ padding: '20px', borderRadius: '15px', marginTop: '20px', marginBottom: '40px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
              <h3>Trip Diary & Photos</h3>
              <label style={{ display: 'flex', alignItems: 'center', gap: '5px', padding: '8px 15px', background: '#2a8153', color: '#fff', borderRadius: '8px', cursor: 'pointer', fontSize: '14px' }}>
                <Upload size={16} /> Upload Photos
                <input type="file" multiple accept="image/*" style={{ display: 'none' }} onChange={handlePhotoUpload} />
              </label>
            </div>

            {photos.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', textAlign: 'center', padding: '20px', border: '1px dashed var(--border-color)', borderRadius: '10px' }}>No photos uploaded yet. Click upload to add some memories!</p>
            ) : (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', gap: '15px' }}>
                {photos.map((base64, idx) => (
                  <div key={idx} style={{ position: 'relative', width: '100%', paddingTop: '100%', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 2px 10px rgba(0,0,0,0.2)' }}>
                    <img src={base64} alt={`Upload ${idx}`} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                    <button 
                      onClick={() => deletePhoto(idx)} 
                      style={{ position: 'absolute', top: '5px', right: '5px', background: 'rgba(255,0,0,0.8)', color: 'white', border: 'none', borderRadius: '50%', width: '25px', height: '25px', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}
                    >
                      <Trash size={14} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TripDetails;